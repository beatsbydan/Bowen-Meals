import Banner from '../../../Banner/Banner';
import Navbar from '../../../Header/Navbar/Navbar';
import Meals from '../../../Meals/Meals';
import './Y2k.css'
const Y2k = () => {
    return (
      <div>
        <Navbar/>
        <Banner caf={'Y2K'}/>
        <Meals/>
      </div>
    );
}
export default Y2k;