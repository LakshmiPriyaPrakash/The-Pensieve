import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getEntries } from '../../store/entries';
import './Entries.css';


function UserEntries() {
    const user = useSelector(state => state.session.user);
    const entries = useSelector(state => state.entries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntries(user.id));
    }, [user]);

    if(entries) {

        const entriesArr = Object.values(entries).reverse();;

            return (
                <div className="entries-cntr">
                    <h2 className="rec-title">Entries</h2>
                    <ul>
                        {entriesArr.map(entry => {
                            return(
                                <li key={entry.id} className="e-list">
                                    <div className="story-container">
                                        <div className="story-details">
                                            <NavLink className="entry-link" to={`/entries/${entry.id}`}>
                                                <h2>{entry.entry_title}</h2>
                                                <p className="story-body">{entry.content}</p>
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



export default UserEntries;
