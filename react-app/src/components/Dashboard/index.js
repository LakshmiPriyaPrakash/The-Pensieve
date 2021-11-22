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
                    <h2>{`Welcome back,  ${user.first_name}`}</h2>
                </div>
                <div id="dashboard-entries">
                    <div id="entry-dash-info">
                        <span style={{ marginRight: "auto" }}>Recent Entries</span>
                        <i
                            id="new-entry-hover"
                            className="fas fa-plus-square fa-2x"
                            style={{ float: "right", paddingTop: 1, paddingRight: 15 }}
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
                                        <h3 style={{marginTop:"auto"}}>{entry.updated_at}</h3>
                                    </div>
                                );
                            })}
                            {entriesArr.length > 0 ? (
                                <div id="entry-card-link" onClick={() => history.push(`/${user.username}/entries`)}>
                                    <i
                                        className="fas fa-sticky-note fa-4x"
                                        style={{ color: "#B8860B", marginTop: -20 }}
                                    ></i>
                                    <h3>{`Entries (${entriesArr.length})`}</h3>
                                </div>
                            ) : (
                                <div id="entry-card-link" onClick={() => history.push("/entry/new")}>
                                    <i
                                        className="fas fa-plus-square fa-4x"
                                        style={{ color: "##B8860B", marginTop: -20 }}
                                    ></i>
                                    <h2
                                        style={{ textAlign: "center", fontSize: 20 }}
                                    >{`Create new Entry`}</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div id="dashboard-journals">
                    <div id="entry-dash-info">
                        <span style={{ marginRight: "auto" }}>Your Journals</span>
                        <i
                            id="new-entry-hover"
                            className="fas fa-plus-square fa-2x"
                            style={{ float: "right", paddingTop: 1, paddingRight: 15 }}
                            onClick={() => history.push("/journal/new")}
                        ></i>
                    </div>
                    <div id="show-dash-journals">
                        {journalsArr.map((journal) => {
                            return (
                                <div id="journal-card" key={journal.id}>
                                    <div onClick={() => history.push(`/journals/${journal.id}`)}>
                                        <i
                                            className="fas fa-book-open fa-2x"
                                            style={{
                                                padding: 8,
                                                display: "inline",
                                                color: "#B8860B",
                                            }}
                                        ></i>
                                        <span
                                            style={{
                                                fontSize: 20,
                                                padding: 10,
                                                marginBottom: 10,
                                            }}
                                        >
                                            {journal.journal_name}
                                        </span>
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
