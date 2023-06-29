import React from 'react'
import Main from '../Main/Main';
import './Home.css'
import Navbar from '../Header/Navbar/Navbar';
const Home = () => {
    return ( 
        <React.Fragment>
            <Navbar/>
            <Main/>
        </React.Fragment>
    );
}
export default Home;