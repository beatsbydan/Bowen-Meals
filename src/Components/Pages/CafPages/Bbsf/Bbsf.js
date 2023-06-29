import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Bbsf.css'
const Bbsf = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner caf={'BBSF'}/>
            <Meals/>
        </div>
    );
}
export default Bbsf;