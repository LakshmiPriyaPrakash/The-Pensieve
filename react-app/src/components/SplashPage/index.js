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
        </div>
    );

};

export default SplashPage;
