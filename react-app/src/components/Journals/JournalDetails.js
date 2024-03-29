import React, { useState, useEffect } from 'react';
import { useHistory, useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteJournal } from "../../store/journals";
import './Journals.css';

function JournalDetails() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { journalId } = useParams();
    const journal = useSelector(state => state.journals[journalId]);
    const entries = useSelector(state => state.entries);
    const entriesArr = Object.values(entries);
    const journalEntries = entriesArr.filter(entry => entry.journal_id === Number(journalId));
    const [defaultJournal, setDefaultJournal] = useState({});

    useEffect(() => {

        (async () => {
            const response = await fetch(`/api/journals/${user.id}/default`);
            const defaultJ = await response.json();
            setDefaultJournal(Object.values(defaultJ)[0].id);
        })();

    }, [user.id]);



    if(journal && journalEntries) {
        return (
            <>
                <div id="j-dets-cntr">
                    <div id="j-dets-wrapper">
                        <div id="j-dets">
                            <h2 className="j-dets-title">{journal.journal_name} Entries </h2>
                            {(journal.id !== defaultJournal) &&
                                <div id="e-d-btn-ctn">
                                    <NavLink to={`/edit/journal/${journal.id}`}>
                                        <button className="j-e-d-btn" type="submit"><i className="far fa-edit" /></button>
                                    </NavLink>
                                    <button className="j-e-d-btn" type="submit"
                                            onClick={() => {
                                                dispatch(deleteJournal(journal.id))
                                                    .then(()=> history.push(`/${user.username}/journals`))
                                            }
                                        }>
                                                <i className="far fa-trash-alt"></i>
                                        </button>
                                </div>
                            }
                        </div>
                        <ul className="j-e-list">
                            {journalEntries.map(entry => {
                                return(
                                    <li key={entry.id} className="je-list">
                                        <NavLink className="jour-ent-link" to={`/entries/${entry.id}`}>
                                            <i className="far fa-sticky-note" />
                                            <h3>{entry.entry_title}</h3>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </>
        )
    } else {
        return null;
    }

}

export default JournalDetails;
