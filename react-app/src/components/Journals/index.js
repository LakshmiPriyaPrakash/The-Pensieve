import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getJournals } from '../../store/journals';
import './Journals.css';


function UserJournals() {
    const user = useSelector(state => state.session.user);
    const journals = useSelector(state => state.journals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJournals(user.id));
    }, [user]);

    if(journals) {

        const journalsArr = Object.values(journals);

            return (
                <div className="adjust">
                    <h2 className="rec-title">User journals</h2>
                    <ul>
                        {journalsArr.map(journal => {
                            return(
                                <li key={journal.id} className="feed-list">
                                    <div className="story-container">
                                        <div className="story-details">
                                            <NavLink className="story-link" to={`/journals/${journal.id}`}>
                                                <h2>{journal.journal_name} ({journal.entries.length})</h2>
                                            </NavLink>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
    } else {
        return null;
    }

}



export default UserJournals;
