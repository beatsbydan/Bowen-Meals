import {BsCheckCircle} from 'react-icons/bs'
import './Success.css'
import { Link } from 'react-router-dom';
const Success  = () => {
    const currCaf = localStorage.getItem('currCaf')
    return ( 
        <div className='success'>
            <BsCheckCircle color='black' size={80}/>
            <h3>Thanks for shopping with <span> {currCaf}</span></h3>
            <span>Want More ? Click<Link to={`/${currCaf.toLocaleLowerCase()}`}> here</Link></span>
        </div>
    );
}

export default Success ;