import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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


        return (
            <div className="dashboard-content">
                <div id="dashboard-info">
                    <p>Welcome, {user.first_name}</p>
                </div>
                <div id="dashboard-entries">
                    <div id="entry-dash-info">
                        <span>Recent Entries</span>
                        <i
                            className="fas fa-plus-square fa-2x add-entry"
                            onClick={() => history.push("/entry/new")}
                        ></i>
                    </div>
                    <div id="recent-entries">
                        <div id="box">
                            {recentEntries.map((entry) => {
                                return (
                                    <div
                                        id="entry-card"
                                        key={entry.id}
                                        onClick={() => history.push(`/entries/${entry.id}`)}
                                    >
                                        <h2>{entry.entry_title}</h2>
                                        <h3>{entry.content}</h3>
                                    </div>
                                );
                            })}
                            {entriesArr.length > 0 &&
                                <div className="entry-card-link" onClick={() => history.push(`/${user.username}/entries`)}>
                                    <i className="fas fa-sticky-note fa-4x entry-list" />
                                    <h3>Entries ({entriesArr.length})</h3>
                                </div>
                            }

                            {entriesArr.length === 0 &&
                                <div className="entry-card-link" onClick={() => history.push("/entry/new")}>
                                    <i className="fas fa-plus-square fa-4x add-entry" />
                                    <h2>Create new Entry</h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div id="dashboard-journals">
                    <div id="entry-dash-info">
                        <span>Your Journals</span>
                        <i
                            className="fas fa-plus-square fa-2x add-entry"
                            onClick={() => history.push("/journal/new")}
                        ></i>
                    </div>
                    <div id="show-dash-journals">
                        {journalsArr.map((journal) => {
                            return (
                                <div id="journal-card" key={journal.id}>
                                    <div onClick={() => history.push(`/journals/${journal.id}`)}>
                                        <i className="fas fa-book-open fa-2x" />
                                        <p> {journal.journal_name} </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
