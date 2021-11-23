import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateJournal } from "../../store/journals";
import { useHistory, useParams } from 'react-router-dom';
import './Journals.css'


function EditJournal() {
    const user = useSelector(state => state.session.user);
    const { journalId } = useParams();
    const journal = useSelector(state => state.journals[journalId]);
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(journal) {
            setName(journal.journal_name);
        }
    }, [journal]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user_id = user.id;

        const editedJournal = {
            id: journal.id,
            user_id,
            journal_name: name
        };


        const data = await dispatch(updateJournal(editedJournal));
        if (data.errors) {
            setErrors(data.errors);
        } else {
            history.push(`/journals/${data.id}`)
        }

      };


        return (
            <>
                <div className="story-form-container">
                        <form className="story-form" onSubmit={handleSubmit}>
                        <h2 className="j-title">Edit Journal</h2>
                        <ul className="ws-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className="ws-form-field">
                                <input
                                className="sf-input"
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoFocus={true}
                                required
                                />
                        </div>
                        <button className="j-button" type="submit">Update</button>
                        </form>
                </div>
            </>
        );
}



export default EditJournal;
