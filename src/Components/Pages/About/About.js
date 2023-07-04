import React from 'react'
import './About.css'
import Navbar from '../../Header/Navbar/Navbar';
const About = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <section className="about">
                <p>CHOOSE THE CAFETERIA YOU WANT TO ORDER FROM</p>
                <p>SELECT,CUSTOMISE AND ADD MEAL AND DRINKS YOU WANT TO GET TO CART</p>
                <p>GO TO CART AND TRANSFER THE AMOUNT YOU WANT TO YOU’RE PAYING FOR INTO THE AVAILABLE ACCOUNT</p>
                <p>UPLOAD RECEIPT AND PUT THE LOCATION YOU WANT IT TO BE DELIVERED</p>
                <p>SUBMIT YOUR ORDER</p>
            </section>
        </React.Fragment> 
        
     );
}
 
export default About;