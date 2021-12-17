import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReactQuill from "react-quill";
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

        const entriesArr = Object.values(entries).reverse();

            return (
                <div className="entries-cntr">
                    <h2 className="rec-title">Entries</h2>
                    <ul className="ent-wr">
                        {entriesArr.map(entry => {

                            let dateWritten = new Date(entry.created);
                            let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
                            let localDateWritten = dateWritten.toLocaleString('default', options);

                            return(
                                <li key={entry.id} className="e-list">
                                    <div className="ent-container">
                                        <div className="ent-details">
                                            <NavLink className="entry-link" to={`/entries/${entry.id}`}>
                                                <h2>{entry.entry_title}</h2>
                                                <h5 className="date-written">{localDateWritten}</h5>
                                                {/* <div> { ReactHtmlParser(entry.content) } </div> */}
                                                <ReactQuill
                                                    value={entry.content}
                                                    readOnly={true}
                                                    theme={"bubble"}
                                                />
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
