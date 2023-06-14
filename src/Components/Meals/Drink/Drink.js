import { useNavigate } from 'react-router-dom';
import './Drink.css'
import React, { useContext } from 'react';
import MealContext from '../../../Contexts/MealContext/MealContext';
const Drink = (props) => {
    const navigate = useNavigate()
    const ctx = useContext(MealContext)
    const handleOpen = () => {
        ctx.handleDrink({
            id: props.id,
            drink: props.drink,
            img: props.img,
            price: props.price
        })
        navigate('/drink')
    }
    return ( 
        <React.Fragment>
            <li id = {`${props.id}`} className='drink' onClick={handleOpen}>
                <div className="drinkImage" style={{backgroundImage:`url(${props.img})`}}></div>
                <div className="pricePerQuantity">
                    <h4>{props.drink}</h4>
                    <small>₦{props.price}</small>
                </div>
            </li>
        </React.Fragment>
    );
}
export default Drink;