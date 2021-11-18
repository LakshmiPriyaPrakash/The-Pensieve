import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Entries.css';


function UserEntries() {
    const user = useSelector(state => state.session.user);
    const entries = useSelector(state => state.entries);

    if(entries) {

        const entriesArr = Object.values(entries).reverse();;

            return (
                <>
                    <h2 className="rec-title">User entries</h2>
                    <ul>
                        {entriesArr.map(entry => {
                            return(
                                <li key={entry.id} className="feed-list">
                                    <div className="story-container">
                                        <div className="story-details">
                                            <NavLink className="story-link" to={`/entries/${entry.id}`}>
                                                <h2>{entry.entry_title}</h2>
                                                <p className="story-body">{entry.content}</p>
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



export default UserEntries;
