import React, { useState, useEffect } from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteEntry, updateEntry } from "../../store/entries";
import './Entries.css';

function EntryDetails() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { entryId } = useParams();
    const entry = useSelector(state => state.entries[entryId]);
    const journals = useSelector(state => state.journals);
    const journalsArr = Object.values(journals);
    const [showList, setShowList] = useState(false);
    const [changedJournalId, setChangedJournalId] = useState(0);


    let journal;
    if(entry) {
        journal = journalsArr.filter(journal => journal.id === entry.journal_id)[0]
    }

    useEffect(() => {
        if(changedJournalId !== 0) {
            setShowList(false);
            const user_id = user.id;
            const journal_id = changedJournalId;
            const entry_title = entry.entry_title || "Untitled"
            const content = entry.content


            const editedEntry = {
                id: entry.id,
                user_id,
                journal_id,
                entry_title,
                content
            };


            return dispatch(updateEntry(editedEntry))
                    .then((updatedEntry)=> history.push(`/entries/${updatedEntry.id}`))
        }

    }, [changedJournalId]);


    if(entry && journal) {
        return (
            <>
                <div id="story-comments">
                    <div id="story-dets">
                        <div onClick={()=> setShowList(!showList)} className="j-name" >
                            <i className="fas fa-book" ></i>
                            {journal.journal_name}
                        </div>
                        {showList &&
                            <div>
                                <ul>
                                    {journalsArr.map(journal => {
                                        return(
                                            <li key={journal.id} onClick={() =>
                                                    setChangedJournalId(journal.id)
                                                }
                                                className="e-j-dropdown"
                                            >
                                                {journal.journal_name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                        <div id="s-dets">
                            <h2 className="story-elements">{entry.entry_title}</h2>
                            <div id="e-d-btn-ctn">
                                <NavLink to={`/edit/entry/${entry.id}`}>
                                <button className="edit-del-btn" type="submit"><i className="far fa-edit"></i></button>
                                </NavLink>
                                <button className="edit-del-btn" type="submit"
                                    onClick={() => {
                                        dispatch(deleteEntry(entry.id))
                                            .then(()=> history.push(`/${user.username}/entries`))
                                    }
                                }>
                                        <i className="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                        <p className="story-elements story-body">{entry.content}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }

}

export default EntryDetails;
