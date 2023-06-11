import MealContext from '../../../Contexts/MealContext/MealContext';
import './Drink.css'
import React, { useContext } from 'react';
const Drink = (props) => {
    const ctx = useContext(MealContext)
    const handleOpen = () => {
        ctx.addDrink({
            id: props.id,
            drink: props.drink,
            img: props.img,
            price: props.price
        })
    }
    return ( 
        <React.Fragment>
            <li id = {`${props.id}`} className='drink' onClick={handleOpen}>
                <div className="drinkImage" style={{backgroundImage:`url(${props.img})`}}></div>
                <div className="pricePerQuantity">
                    <h4>{props.drink}</h4>
                    <small>{props.price}</small>
                </div>
            </li>
        </React.Fragment>
    );
}
export default Drink;