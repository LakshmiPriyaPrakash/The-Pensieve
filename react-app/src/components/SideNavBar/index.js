import { NavLink,  Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../store/session';
import './SideNavBar.css'


function SideNavBar() {
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch()

	const onLogout = async (e) => {
		await dispatch(logout());
	  };

	return (
		<div className="sidebar">

			<h1>
				<i className="fas fa-user-circle"/>
				{user.username}
			</h1>

			<NavLink to="/entry/new" id="create-new-entry">
				<i className="fas fa-pen" />
				Create New Entry
			</NavLink>

            <NavLink to="/journal/new" id="create-new-entry">
				<i className="fas fa-pen" />
				Create New Journal
			</NavLink>

			<NavLink to={`/${user.username}/dashboard`} >
				<div className="side-bar-link">
					<i className="fas fa-home" />
					Home
				</div>
			</NavLink>

			<NavLink to={`/${user.username}/entries`} >
				<div className="side-bar-link">
					<i className="far fa-sticky-note" />
					Entries
				</div>
			</NavLink>

            <NavLink to={`/${user.username}/journals`} >
				<div className="side-bar-link">
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
					<Link
						to={{ pathname: "https://www.linkedin.com/in/lakshmi-priya-prakash/" }}
						target="_blank"
					>
						<i
							className="fab fa-linkedin footer-icon fa-2x"

						/>
					</Link>

					<Link
						to={{ pathname: "https://github.com/LakshmiPriyaPrakash" }}
						target="_blank"
					>
						<i
							className="fab fa-github footer-icon fa-2x"

						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SideNavBar;
