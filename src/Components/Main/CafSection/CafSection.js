import { Link } from 'react-router-dom';
import './CafSection.css'
import { useContext } from 'react';
import NavContext from '../../../Contexts/NavContext/NavContext';
const CafSection = () => {
    const ctx = useContext(NavContext)
    return ( 
        <section className="cafSection">
            <h2>Choose Cafeteria</h2>
            <div className="cafs">
                <div className="cafBlock">
                    <Link to={'/bbsf'}><div className='caf bbsf'></div></Link>
                    <p>BBSF</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/jubilee'}><div className='caf jubilee'></div></Link>
                    <p>JUBILEE</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/y2k'}><div className='caf y2k'></div></Link>
                    <p>Y2K</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/buwa'}><div className='caf buwa'></div></Link>
                    <p>BUWA</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/blessed'}><div className='caf blessed'></div></Link>
                    <p>BLESSED</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/divine'}><div className='caf divine'></div></Link>
                    <p>DIVINE</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/kemibee'}><div className='caf kemiBee'></div></Link>
                    <p>KEMI-BEE</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/glory'}><div className='caf glory'></div></Link>
                    <p>GLORY</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/sumptuous'}><div className='caf sumptuous'></div></Link>
                    <p>SUMPTUOUS</p>
                </div>
                <div className="cafBlock">
                    <Link to={'/forza'}><div className='caf forza'></div></Link>
                    <p>FORZA</p>
                </div>
            </div>
        </section>
     );
}
 
export default CafSection;