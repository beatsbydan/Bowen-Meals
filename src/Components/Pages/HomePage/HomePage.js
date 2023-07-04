import { Link } from 'react-router-dom';
import './HomePage.css'
import logo from '../../../Assets/Images/logo.svg'
const HomePage = () => {
    return (  
        <section className='homePage'>
            <div className="pageContent">
                <img src={logo} alt ='' className="homeLogo"/>
                <div className="authButton">
                    <Link to={'/staffLogin'}>STAFF LOGIN</Link>
                    <Link to={'/studentLogin'}>STUDENT LOGIN</Link>
                </div>
            </div>
        </section>
    );
}
export default HomePage;