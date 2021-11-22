import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import './SplashPage.css'


const SplashPage = () => {
    const user = useSelector((state) => state.session.user);

    if (user) {
        return <Redirect to={`/${user.username}/dashboard`} />;
      }

    return (
        <h1>Splash page</h1>
    );

};

export default SplashPage;
