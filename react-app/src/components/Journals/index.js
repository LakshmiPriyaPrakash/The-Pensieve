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
                <div className="jour-cntr">
                    <h2 className="jour-title">Journals</h2>
                    <ul className="jour-wr">
                        {journalsArr.map(journal => {
                            
                            let dateCreated = new Date(journal.created);
                            let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
                            let localDateCreated = dateCreated.toLocaleString('default', options);

                            return(
                                <li key={journal.id} className="jour-list">
                                    <div className="jour-container">
                                        <div className="jour-details">
                                            <NavLink className="jour-link" to={`/journals/${journal.id}`}>
                                                <h2>{journal.journal_name} ({journal.entries.length})</h2>
                                                <h5 className="date-written">Created on : {localDateCreated}</h5>
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
