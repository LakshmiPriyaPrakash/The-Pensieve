import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './Entries.css';

function EntryDetails() {
    const { entryId } = useParams();
    const entry = useSelector(state => state.entries[entryId]);
    console.log(entry)

    if(entry) {
        return (
            <>
                <div id="story-comments">
                    <div id="story-dets">
                        <h2 className="story-elements">{entry.entry_title}</h2>
                        <p className="story-elements story-body">{entry.content}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }

}

export default EntryDetails;
