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
    const journalEntries = entriesArr.filter(entry => entry.journal_id === Number(journalId))


    if(journal && journalEntries) {
        return (
            <>
                <div id="story-comments">
                    <div id="story-dets">
                        <h2 className="story-elements">{journal.journal_name} </h2>
                        <ul>
                            {journalEntries.map(entry => {
                                return(
                                    <li key={entry.id} className="feed-list">
                                        <div className="story-container">
                                            <div className="story-details">
                                                <NavLink className="story-link" to={`/entries/${entry.id}`}>
                                                    <h2>{entry.entry_title}</h2>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div id="e-d-btn-ctn">
                        <NavLink to={`/edit/journal/${journal.id}`}>
                            <button className="edit-del-btn" type="submit"><i className="far fa-edit"></i></button>
                        </NavLink>
                            <button className="edit-del-btn" type="submit"
                                onClick={() => {
                                    dispatch(deleteJournal(journal.id))
                                        .then(()=> history.push(`/${user.username}/journals`))
                                }
                            }>
                                    <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                </div>
            </>
        )
    } else {
        return null;
    }

}

export default JournalDetails;
