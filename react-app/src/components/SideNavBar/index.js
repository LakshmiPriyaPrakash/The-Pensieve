import { NavLink,  Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import './SideNavBar.css'


function SideNavBar() {
	const user = useSelector((state) => state.session.user);

	return (
		<div className="sidebar">

			<h1 style={{ marginLeft: 10 }}>
				<i className="fas fa-user-circle" style={{ paddingRight: 10 }} />
				{user.username}
			</h1>

			<NavLink
				to="/entry/new"
                id="create-new-entry">
				<i className="fas fa-pen" style={{ paddingRight: 8 }}></i>
				Create New Entry
			</NavLink>

            <NavLink
				to="/journal/new"
                id="create-new-entry">
				<i className="fas fa-pen" style={{ paddingRight: 8 }}></i>
				Create New Journal
			</NavLink>

			<NavLink
				exact
				to={`/${user.username}/dashboard`}
				activeClassName="side-bar-selected"
				id="side-bar-active"
			>
				<div id="side-bar-link">
					<i className="fas fa-home"></i> Home
				</div>
			</NavLink>

			<NavLink
				to={`/${user.username}/entries`}
				activeClassName="side-bar-selected"
				id="side-bar-active"
			>
				<div id="side-bar-link">
					<i className="far fa-sticky-note" style={{ paddingRight: 8 }}></i>
					Entries
				</div>
			</NavLink>

            <NavLink
				to={`/${user.username}/journals`}
				activeClassName="side-bar-selected"
				id="side-bar-active"
			>
				<div id="side-bar-link">
					<i className="fas fa-book" style={{ paddingRight: 8 }}></i>
					Journals
				</div>
			</NavLink>

			<div
				id="side-bar-active"
				className="log-out-div"
				style={{ padding: 8 }}
			>
				{/* <i className="fas fa-sign-out-alt" style={{ paddingRight: 8 }}></i> */}
				<LogoutButton />
			</div>

			<div id="footer-container">
				<Link
                    to={{ pathname: "https://www.linkedin.com/in/lakshmi-priya-prakash/" }}
					target="_blank"
				>
					<i
						className="fab fa-linkedin footer-icon fa-2x"
						style={{ paddingRight: 10 }}
					></i>
				</Link>

				<Link
					to={{ pathname: "https://github.com/LakshmiPriyaPrakash" }}
					target="_blank"
				>
					<i
						className="fab fa-github footer-icon fa-2x"
						style={{ paddingLeft: 10 }}
					></i>
				</Link>
			</div>
		</div>
	);
}

export default SideNavBar;
