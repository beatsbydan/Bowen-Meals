import {BsCheckCircle} from 'react-icons/bs'
import './Success.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../Header/Navbar/Navbar';
const Success  = () => {
    const currCaf = localStorage.getItem('currCaf')
    return ( 
        <React.Fragment>
            <Navbar/>
            <div className='success'>
                <BsCheckCircle color='black' size={80}/>
                <h3>Thanks for shopping with <span> {currCaf}</span></h3>
                <span>Want More ? Click<Link to={`/${currCaf.toLocaleLowerCase()}`}> here</Link></span>
            </div>
        </React.Fragment>
    );
}

export default Success ;