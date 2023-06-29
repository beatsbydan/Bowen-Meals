import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Sumptuous.css'
const Sumptuous = () => {
    return (  
        <div>
            <Navbar/>
            <Banner caf={'SUMPTUOUS'}/>
            <Meals/>
        </div>
    );
}
export default Sumptuous;