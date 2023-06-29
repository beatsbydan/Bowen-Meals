import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Forza.css'
const Forza = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner caf={'FORZA'}/>
            <Meals/>
        </div>
    );
}
export default Forza;