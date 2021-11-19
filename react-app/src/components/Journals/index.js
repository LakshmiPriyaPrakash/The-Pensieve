import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Journals.css';


function UserJournals() {
    const user = useSelector(state => state.session.user);
    const journals = useSelector(state => state.journals);

    if(journals) {

        const journalsArr = Object.values(journals);;

            return (
                <>
                    <h2 className="rec-title">User journals</h2>
                    <ul>
                        {journalsArr.map(journal => {
                            return(
                                <li key={journal.id} className="feed-list">
                                    <div className="story-container">
                                        <div className="story-details">
                                            <NavLink className="story-link" to={`/journals/${journal.id}`}>
                                                <h2>{journal.journal_name}</h2>
                                            </NavLink>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )
    } else {
        return null;
    }

}



export default UserJournals;
