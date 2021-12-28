import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEntries } from '../../store/entries';
import { getJournals } from '../../store/journals';
import { logout } from '../../store/session';
import './SideNavBar.css'



function SideNavBar({setSearchTerm}) {
	const user = useSelector((state) => state.session.user);
	const entries = useSelector(state => state.entries);
    const journals = useSelector(state => state.journals);
	const dispatch = useDispatch()
	const history = useHistory();
	const [search, setSearch] = useState("");
	const [searchList, setSearchList] = useState([]);
	const [showList, setShowList] = useState(false);

	const openList = () => {
        if (showList) return;
        setShowList(true);
    };

	const closeList = () => {
		setShowList(false);
	};

    useEffect(() => {
        if (!showList) return;

        const closeList = () => {
          setShowList(false);
        };

        document.addEventListener('click', closeList);

        return () => document.removeEventListener("click", closeList);
    }, [showList]);


	useEffect(() => {
		if(search.length !== 0) openList();
		if(search.length === 0 || searchList.length === 0) closeList();

        if(search && (entries || journals)){
			const entriesArr = Object.values(entries);
			const journalsArr = Object.values(journals);

			const foundEntries = entriesArr.filter((entry) => {
				const entryTitle = entry.entry_title.toLowerCase();
				return entryTitle.includes(search.toLowerCase())
			});

			const foundJournals = journalsArr.filter((journal) => {
				const journalName = journal.journal_name.toLowerCase();
				return journalName.includes(search.toLowerCase());
			});

			setSearchList(foundEntries.concat(foundJournals))

		}

    }, [search, searchList.length]);

    const onSearch = () => {
		setSearchTerm(search)
		setSearch("")
		history.push(`/search`)
	};


	const onSelect = (searchTerm) => {
		const searchTimer = setTimeout(async () => {
			setSearchTerm(searchTerm)
			setSearch("")
			history.push(`/search`)
		}, 300);

		return () => clearTimeout(searchTimer);
	};


	const onLogout = async (e) => {
		await dispatch(logout());
	  };

	return (
		<div className="sidenav">

			<h1>
				<i className="fas fa-user-circle"/>
				{user.username}
			</h1>

			<div className="search-cont">
				<i className="fas fa-search" />
				<input
					className="search-input"
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value)
					}}
					onKeyPress={(e) => e.key === 'Enter' && onSearch()}
				/>
        	</div>
			{showList &&
                <ul id="jour-dropdown">
                    {searchList.map(searchBlob => {
						let searchTerm = searchBlob.entry_title || searchBlob.journal_name
                        return(
                            <li key={searchTerm} onClick={() => {
								setSearch(searchTerm)
								onSelect(searchTerm)
							}
                    			}
                        		className="e-j-dropdown select-jour"
                            >
                                {searchTerm}
                            </li>
                        )
                    })}
                </ul>
            }

			<NavLink to="/entry/new" id="create-new-entry">
				<i className="fas fa-plus" />
				Create New Entry
			</NavLink>

            <NavLink to="/journal/new" id="create-new-entry">
				<i className="fas fa-plus" />
				Create New Journal
			</NavLink>

			<NavLink to={`/${user.username}/dashboard`} >
				<div className="side-nav-link">
					<i className="fas fa-home" />
					Home
				</div>
			</NavLink>

			<NavLink to={`/${user.username}/entries`} >
				<div className="side-nav-link">
					<i className="far fa-sticky-note" />
					Entries
				</div>
			</NavLink>

            <NavLink to={`/${user.username}/journals`} >
				<div className="side-nav-link">
					<i className="fas fa-book" />
					Journals
				</div>
			</NavLink>

			<div className="log-out-div" onClick={onLogout}>
				Logout
			</div>

			<div id="f-wrapper">
				<h4>Lakshmi Priya Prakash</h4>
				<div id="footer-container">
					<a
						href='https://www.linkedin.com/in/lakshmi-priya-prakash/'
						target="_blank"
					>
						<i className="fab fa-linkedin footer-icon fa-2x" />
					</a>

					<a
						href='https://github.com/LakshmiPriyaPrakash'
						target="_blank"
					>
						<i className="fab fa-github footer-icon fa-2x" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default SideNavBar;
