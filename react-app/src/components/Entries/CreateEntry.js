import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEntry } from "../../store/entries";
import { useHistory } from 'react-router-dom';
import './Entries.css'


function WriteEntry() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const journals = useSelector(state => state.journals);
    const journalsArr = Object.values(journals);
    const journal = journalsArr[0];

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user_id = user.id;
        const entry_title = title || "Untitled"

        const newEntry = {
            user_id,
            journal_id: journal.id,
            entry_title,
            content
        };


        const data = await dispatch(createEntry(newEntry));
        if (data.errors) {
            setErrors(data.errors);
        } else {
            history.push(`/entries/${data.id}`)
        }
      };


        return (
            <>
                <div className="story-form-container">
                        <form className="story-form" onSubmit={handleSubmit}>
                        <h2 className="ws-title">Your thoughts...</h2>
                        <ul className="ws-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className="ws-form-field">
                                <input
                                className="sf-input"
                                id="title"
                                type="text"
                                value={title}
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus={true}
                                />
                        </div>
                        <div className="ws-form-field">
                                <textarea
                                className="sf-content"
                                id="content"
                                rows="15"
                                cols="70"
                                value={content}
                                placeholder="Start writing..."
                                onChange={(e) => setContent(e.target.value)}
                                />
                        </div>
                        <button className="ws-button" type="submit">Submit</button>
                        </form>
                </div>
            </>
        );
}



export default WriteEntry;
