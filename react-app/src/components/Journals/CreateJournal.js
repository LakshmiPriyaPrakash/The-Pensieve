import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createJournal } from "../../store/journals";
import { useHistory } from 'react-router-dom';
import './Journals.css'


function CreateJournal() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user_id = user.id;

        const newJournal = {
            user_id,
            journal_name: name
        };


        return dispatch(createJournal(newJournal))
                .then(()=> history.push(`/${user.username}/journals`))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });

      };



        return (
            <>
                <div className="story-form-container">
                        <form className="story-form" onSubmit={handleSubmit}>
                        <h2 className="j-title">New Journal</h2>
                        <ul className="ws-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className="ws-form-field">
                                <input
                                className="j-input"
                                id="name"
                                type="text"
                                value={name}
                                placeholder="Journal name"
                                onChange={(e) => setName(e.target.value)}
                                autoFocus={true}
                                required
                                />
                        </div>
                        <button className="j-button" type="submit">Create</button>
                        </form>
                </div>
            </>
        );
}



export default CreateJournal;
