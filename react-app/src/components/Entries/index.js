import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getEntries } from '../../store/entries';
import './Entries.css';


function UserEntries() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getEntries(user.id)).then(() => setIsLoaded(true));
      }, [user]);

    const entries = useSelector(state => state.entries);

    if(isLoaded) {

        const entriesArr = Object.values(entries);

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
