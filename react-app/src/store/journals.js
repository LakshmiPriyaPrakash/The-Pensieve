const LOAD_JOURNALS = "journals/LOAD";
const ADD_JOURNAL = "journals/ADD_JOURNAL";
const UPDATE_JOURNAL = "journals/UPDATE_JOURNAL";
const DELETE_JOURNAL = "journals/DELETE_JOURNAL";


const loadJournals = (journals) => ({
    type: LOAD_JOURNALS,
    journals,
});

const addOneJournal = (newJournal) => ({
  type: ADD_JOURNAL,
  newJournal,
});

const updateOneJournal = (updatedJournal) => ({
  type: UPDATE_JOURNAL,
  updatedJournal,
});

const deleteOneJournal = (deletedJournalId) => ({
  type: DELETE_JOURNAL,
  deletedJournalId,
});


export const getJournals = (userId) => async (dispatch) => {
    const response = await fetch(`/api/journals/${userId}`);

    if (response.ok) {
      const journals = await response.json();
      dispatch(loadJournals(journals));
    }
};


export const createJournal = (newJournal) => async (dispatch) => {
  const response = await fetch(`/api/journals/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newJournal),
  });

  if (response.ok) {
    const newJournal = await response.json();
    dispatch(addOneJournal(newJournal));
    return newJournal;
  }
};


export const updateJournal = (updateJournal) => async (dispatch) => {
  const response = await fetch(`/api/journals/${updateJournal.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateJournal),
  });

  if (response.ok) {
    const updatedJournal = await response.json();
    dispatch(updateOneJournal(updatedJournal));
    return updatedJournal;
  }
};


export const deleteJournal = (journalId) => async (dispatch) => {
  const response = await fetch(`/api/journals/${journalId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedJournalId = await response.json();
    dispatch(deleteOneJournal(deletedJournalId));
  }
};

const initialState = {};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_JOURNALS: {
        return {...initialState, ...action.journals}
    }
    case ADD_JOURNAL:{
        const newState = {...state}
        newState[action.newJournal.id] = {...action.newJournal}
        return newState;
    }
    case UPDATE_JOURNAL:{
      const newState = {...state}
      newState[action.updatedJournal.id] = {...action.updatedJournal}
      return newState;
    }
    case DELETE_JOURNAL:{
      const newState = {...state}
      delete newState[action.deletedJournalId.id]
      return newState;
    }
    default:
      return state;
  }
};
