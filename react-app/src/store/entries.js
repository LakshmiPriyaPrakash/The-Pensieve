const LOAD_ENTRIES = "entries/LOAD";
const ADD_ENTRY = "entries/ADD_ENTRY";
const UPDATE_ENTRY = "entries/UPDATE_ENTRY";
const DELETE_ENTRY = "entries/DELETE_ENTRY";


const loadEntries = (entries) => ({
    type: LOAD_ENTRIES,
    entries,
});

const addOneEntry = (newEntry) => ({
  type: ADD_ENTRY,
  newEntry,
});

const updateOneEntry = (updatedEntry) => ({
  type: UPDATE_ENTRY,
  updatedEntry,
});

const deleteOneEntry = (deletedEntryId) => ({
  type: DELETE_ENTRY,
  deletedEntryId,
});


export const getEntries = (userId) => async (dispatch) => {
    const response = await fetch(`/api/entries/${userId}`);

    if (response.ok) {
      const entries = await response.json();
      dispatch(loadEntries(entries));
    }
};


export const createEntry = (newEntry) => async (dispatch) => {
  const response = await fetch(`/api/entries/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEntry),
  });

  const data = await response.json();

  if (!data.errors) {
    dispatch(addOneEntry(data));
  }

  return data;
};


export const updateEntry = (updateEntry) => async (dispatch) => {
  const response = await fetch(`/api/entries/${updateEntry.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateEntry),
  });

  const data = await response.json();

  if (!data.errors) {
    dispatch(updateOneEntry(data));
  }

  return data;
};


export const deleteEntry = (entryId) => async (dispatch) => {
  const response = await fetch(`/api/entries/${entryId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedEntryId = await response.json();
    dispatch(deleteOneEntry(deletedEntryId));
  }
};

const initialState = {};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ENTRIES: {
        return {...initialState, ...action.entries}
    }
    case ADD_ENTRY:{
        const newState = {...state}
        newState[action.newEntry.id] = {...action.newEntry}
        return newState;
    }
    case UPDATE_ENTRY:{
      const newState = {...state}
      newState[action.updatedEntry.id] = {...action.updatedEntry}
      return newState;
    }
    case DELETE_ENTRY:{
      const newState = {...state}
      delete newState[action.deletedEntryId.id]
      return newState;
    }
    default:
      return state;
  }
};
