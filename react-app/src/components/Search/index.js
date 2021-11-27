import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getEntries } from '../../store/entries';
import { getJournals } from '../../store/journals';
import './Search.css';


const Search = ({searchTerm}) => {
    const user = useSelector(state => state.session.user);
    const entries = useSelector(state => state.entries);
    const journals = useSelector(state => state.journals);
    const dispatch = useDispatch();
    const history = useHistory();

    if(searchTerm === "") {
        history.push(`/${user.username}/dashboard`)
    }

    useEffect(() => {
        dispatch(getEntries(user.id));
        dispatch(getJournals(user.id));
    }, [user]);

    if(entries || journals) {
        const entriesArr = Object.values(entries);
        const journalsArr = Object.values(journals);

        const foundEntries = entriesArr.filter((entry) => {
            const entryTitle = entry.entry_title.toLowerCase();
            return entryTitle.includes(searchTerm.toLowerCase())
        });

        const foundJournals = journalsArr.filter((journal) => {
            const journalName = journal.journal_name.toLowerCase();
            return journalName.includes(searchTerm.toLowerCase());
        });


        if(foundEntries.length || foundJournals.length) {

            return (
                <div className="search-res">
                    {foundEntries.map((entry) => {
						return (
							<NavLink exact to={`/entries/${entry.id}`} key={entry.id}>
								<i className="far fa-sticky-note" />
                                {entry.entry_title}
							</NavLink>
						);
					})}
                    {foundJournals.map((journal) => {
						return (
							<NavLink exact to={`/journals/${journal.id}`} key={journal.id}>
                                <i className="fas fa-book" />
								{journal.journal_name}
							</NavLink>
						);
					})}
                </div>
            );
        } else {

            return (
                <div className="search-res">
                    Sorry, no results found.
                </div>
            );
        }

    }
}



export default Search;
