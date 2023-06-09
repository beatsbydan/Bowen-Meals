import './BackgroundSection.css'
import bg from '../../../Assets/Images/main-bg.svg'
import { Link } from 'react-router-dom';
const BackgroundSection = () => {
    return ( 
        <section className="background">
            <img src={bg} alt="" />
            <div className="content">
                <h1>Healthy food for busy people.</h1>
                <p>Imagine devouring healthy and delicious meals without so much as lifting a pot.</p>
                <button><Link to={'/about'}>HOW IT WORKS</Link></button>
            </div>
        </section>
     );
}
 
export default BackgroundSection;