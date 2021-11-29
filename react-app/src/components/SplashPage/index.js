import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import './SplashPage.css'
import TopNavBar from '../TopNavBar';


const SplashPage = () => {
    const user = useSelector((state) => state.session.user);

    if (user) {
        return <Redirect to={`/${user.username}/dashboard`} />;
      }

    return (
        <div id="splash-cnt">
            <TopNavBar />
            <div className="spl-txt">
                <p>Everything in this universe is created twice.</p>
                <p>First, in our minds.</p>
                <p>Then, in reality.</p>
            </div>
            <div className="spl-txt">
                <p>May this online journal be a treasure trove </p>
                <p>of your memories and experiences,</p>
                <p>and a constant companion in your journey</p>
                <p>towards growth and happiness.</p>
            </div>
            <div className="spl-sig">
                <p>Created with love, </p>
                <p id="sig">Lakshmi Priya Prakash</p>
            </div>
            <div id="spl-footer-cnt">
                    <a
						href='https://www.linkedin.com/in/lakshmi-priya-prakash/'
						target="_blank"
					>
						<i className="fab fa-linkedin spl-footer-icon fa-2x" />
					</a>

					<a
						href='https://github.com/LakshmiPriyaPrakash'
						target="_blank"
					>
						<i className="fab fa-github spl-footer-icon fa-2x" />
					</a>
				</div>
        </div>
    );

};

export default SplashPage;
