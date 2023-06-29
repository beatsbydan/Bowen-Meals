import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './KemiBee.css'
const KemiBee = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner caf={'KEMIBEE'}/>
            <Meals/>
        </div>
    );
}
export default KemiBee;