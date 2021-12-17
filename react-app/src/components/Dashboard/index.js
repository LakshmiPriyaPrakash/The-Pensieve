import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import './Dashboard.css'

const Dashboard = () => {
    const user = useSelector((state) => state.session.user);
    const entries = useSelector(state => state.entries);
    const journals = useSelector(state => state.journals);
    const history = useHistory();

    if(entries && journals) {

        const entriesArr = Object.values(entries).reverse();
        const recentEntries = entriesArr.slice(0, 4);
        const journalsArr = Object.values(journals).reverse();
        const recentJournals = journalsArr.slice(0, 4);


        return (
            <div className="dashboard-content">
                <div id="dashboard-info">
                    <p>Welcome, {user.first_name}</p>
                </div>
                <div id="dashboard-entries">
                    <div id="entry-dash-info">
                        Recent Entries
                    </div>
                    <div id="recent-entries">
                        <div id="container">
                            {recentEntries.map((entry) => {
                                return (
                                    <div
                                        id="entry-card"
                                        key={entry.id}
                                        onClick={() => history.push(`/entries/${entry.id}`)}
                                    >
                                        <h2>{entry.entry_title}</h2>
                                        <h3>
                                            <ReactQuill
                                                className="dash-ent"
                                                value={entry.content}
                                                readOnly={true}
                                                theme={"bubble"}
                                                style={{ fontSize: 8}}
                                            />
                                        </h3>
                                    </div>
                                );
                            })}
                            {entriesArr.length > 0 &&
                                <div className="entry-card-link" onClick={() => history.push(`/${user.username}/entries`)}>
                                    <i className="fas fa-sticky-note fa-3x entry-list" />
                                    <h3>Entries ({entriesArr.length})</h3>
                                </div>
                            }

                            {entriesArr.length === 0 &&
                                <div className="entry-card-link" onClick={() => history.push("/entry/new")}>
                                    <i className="fas fa-plus fa-3x add-entry" />
                                    <h2>Create new Entry</h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div id="dashboard-jours">
                    <div id="jour-dash-info">
                        Recent Journals
                    </div>
                    <div id="recent-jours">
                        <div id="container">
                            {recentJournals.map((journal) => {
                                return (
                                    <div
                                        id="jour-card"
                                        key={journal.id}
                                        onClick={() => history.push(`/journals/${journal.id}`)}
                                    >
                                        <h2>{journal.journal_name}</h2>
                                        {journal.entries.slice(0, 3).map((entry) => {
                                            return (
                                                <div className="dash-jour-ents">
                                                    <i className="far fa-sticky-note" />
                                                    <h3>{entry.entry_title}</h3>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                            <div className="jour-card-link" onClick={() => history.push(`/${user.username}/journals`)}>
                                <i className="fas fa-book fa-3x entry-list" />
                                <h3>Journals ({journalsArr.length})</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
