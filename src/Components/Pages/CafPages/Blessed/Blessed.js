import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Blessed.css'
const Blessed = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner caf={'BLESSED'}/>
            <Meals/>
        </div>
    );
}
export default Blessed;