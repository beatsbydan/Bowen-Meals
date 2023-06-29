import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Divine.css'
const Divine = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner caf={'DIVINE'}/>
            <Meals/>
        </div>
    );
}
export default Divine;