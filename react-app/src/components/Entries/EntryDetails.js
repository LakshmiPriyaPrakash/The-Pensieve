import { useHistory, useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteEntry } from "../../store/entries";
import './Entries.css';

function EntryDetails() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { entryId } = useParams();
    const entry = useSelector(state => state.entries[entryId]);
    const journals = useSelector(state => state.journals);
    const journalsArr = Object.values(journals);

    let journal;
    if(entry) {
        journal = journalsArr.filter(journal => journal.id === entry.journal_id)[0]
    }


    if(entry) {
        return (
            <>
                <div id="story-comments">
                    <div id="story-dets">
                        <div>
                            <i className="fas fa-book"></i>
                            {journal.journal_name}
                        </div>

                        <h2 className="story-elements">{entry.entry_title}</h2>
                        <p className="story-elements story-body">{entry.content}</p>
                    </div>
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
            </>
        )
    } else {
        return null;
    }

}

export default EntryDetails;
