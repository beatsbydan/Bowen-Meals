import { Link } from 'react-router-dom';
import './CafSection.css'
const CafSection = () => {
    const setCurrCaf = (value) => {
        localStorage.setItem('currCaf', value)

    }
    return ( 
        <section className="cafSection">
            <h2>Choose Cafeteria</h2>
            <div className="cafs">
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('BBSF')} to={'/bbsf'}><div className='caf bbsf'></div></Link>
                    <p>BBSF</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Jubilee')} to={'/jubilee'}><div className='caf jubilee'></div></Link>
                    <p>JUBILEE</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Y2k')} to={'/y2k'}><div className='caf y2k'></div></Link>
                    <p>Y2K</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Buwa')}to={'/buwa'}><div className='caf buwa'></div></Link>
                    <p>BUWA</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Blessed')} to={'/blessed'}><div className='caf blessed'></div></Link>
                    <p>BLESSED</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Divine')} to={'/divine'}><div className='caf divine'></div></Link>
                    <p>DIVINE</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('KEMIBEE')} to={'/kemibee'}><div className='caf kemiBee'></div></Link>
                    <p>KEMI-BEE</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Glory')} to={'/glory'}><div className='caf glory'></div></Link>
                    <p>GLORY</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Sumptuous')} to={'/sumptuous'}><div className='caf sumptuous'></div></Link>
                    <p>SUMPTUOUS</p>
                </div>
                <div className="cafBlock">
                    <Link onClick={()=>setCurrCaf('Forza')} to={'/forza'}><div className='caf forza'></div></Link>
                    <p>FORZA</p>
                </div>
            </div>
        </section>
    );
}
export default CafSection;