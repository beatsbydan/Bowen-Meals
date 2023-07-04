import './BackgroundSection.css'
import bg from '../../../Assets/Images/main-bg.svg'
const BackgroundSection = () => {
    return ( 
        <section className="background">
            <img src={bg} alt="" />
            <div className="content">
                <h1>Healthy food for busy people.</h1>
                <p>Imagine devouring healthy and delicious meals without so much as lifting a pot.</p>
                <button>HOW IT WORKS</button>
            </div>
        </section>
    );
}
export default BackgroundSection;