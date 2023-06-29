import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Buwa.css'
const Buwa = () => {
    return (  
        <div>
            <Navbar/>
            <Banner caf={'BUWA'}/>
            <Meals/>
        </div>
    );
}
 
export default Buwa;