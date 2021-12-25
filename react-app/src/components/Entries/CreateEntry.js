import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux";
import { createEntry, updateEntry } from "../../store/entries";
import { useHistory } from 'react-router-dom';
import './Entries.css'


function WriteEntry() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const journals = useSelector(state => state.journals);
    const journalsArr = Object.values(journals);
    const defaultJournal = journalsArr[0];

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedJournal, setSelectedJournal] = useState("");
    const [saveStatus, setSaveStatus] = useState("Saving...");
    const [isSaved, setIsSaved] = useState(false);
    const [isNewEntry, setIsNewEntry] = useState(true);
    const [newEntryId, setNewEntryId] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setIsSaved(false)
        setSaveStatus("Saving...")

        const autoSaveTimer = setTimeout(async () => {
            if((title || content || selectedJournal) && isNewEntry) {
                const user_id = user.id;
                const entry_title = title || "Untitled"

                const newEntry = {
                    user_id,
                    journal_id: selectedJournal || defaultJournal.id,
                    entry_title,
                    content
                };

                const data = await dispatch(createEntry(newEntry));
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setIsNewEntry(false)
                    setNewEntryId(data.id)
                    setSaveStatus("All changes saved")
                    setIsSaved(true)
                }
            }

            if((title || content || selectedJournal) && !isNewEntry) {
                const user_id = user.id;
                const journal_id = selectedJournal || defaultJournal.id;
                const entry_title = title || "Untitled"

                const editedEntry = {
                    id: newEntryId,
                    user_id,
                    journal_id,
                    entry_title,
                    content
                };


                const data = await dispatch(updateEntry(editedEntry));
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setSaveStatus("All changes saved")
                    setIsSaved(true)
                }
            }

        }, 1000);

        return () => clearTimeout(autoSaveTimer);

    }, [title, content, selectedJournal]);


    if(defaultJournal) {

        return (
            <>
                <div className="entry-form-cntr">
                    <form className="entry-form">
                        <h2 className="e-title">Your thoughts...</h2>
                        <ul className="ws-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className="ws-form-field">
                                <input
                                className="e-input"
                                id="title"
                                type="text"
                                value={title}
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus={true}
                                />
                        </div>
                        <div className="jour-sel-field">
                            Choose a journal:
                            <select
                                className="jour-sel"
                                onChange={(e) => setSelectedJournal(e.target.value)}
                            >
                                    {journalsArr.map((journal) => (
                                        <option
                                            value={journal.id}
                                            key={journal.id}
                                        >
                                            {journal.journal_name}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <ReactQuill
                            className="ws-form-field e-content"
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            placeholder={"Start writing..."}
                            modules={modules}
                            formats={formats}
                            style={{minHeight: '500px', height: "500px", width:"900px"}}
                        />

                        {!isSaved &&
                            <h4 className="save-status1">
                                {saveStatus}
                            </h4>
                        }

                        {isSaved &&
                            <h4 className="save-status2"
                                onClick={() => history.push(`/entries/${newEntryId}`)}
                            >
                                {saveStatus}
                                <i className="fas fa-book-open read-save" />
                            </h4>
                        }

                    </form>
                </div>
            </>
        );
    } else {
        return null;
    }
}



export default WriteEntry;
