import { Link } from 'react-router-dom';
import './HomePage.css'
const HomePage = () => {
    return (  
        <section className='homePage'>
            <div className="authButton">
                <Link to={'/staffLogin'}>STAFF LOGIN</Link>
                <Link to={'/studentLogin'}>STUDENT LOGIN</Link>
            </div>
        </section>
    );
}
export default HomePage;