import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Jubilee.css'
const Jubilee = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner caf={'JUBILEE'}/>
            <Meals/>
        </div>
     );
}
 
export default Jubilee;