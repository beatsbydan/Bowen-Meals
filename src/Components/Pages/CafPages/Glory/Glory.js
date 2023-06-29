import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Glory.css'
const Glory = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner caf={'GLORY'}/>
            <Meals/>
        </div>
    );
}
export default Glory;