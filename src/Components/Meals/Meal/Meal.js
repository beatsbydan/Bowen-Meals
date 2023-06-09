import React, { useContext } from 'react';
import './Meal.css'
import MealContext from '../../../Contexts/MealContext/MealContext';
import { useNavigate } from 'react-router-dom';
const Meal = (props) => {
    const ctx = useContext(MealContext)
    const navigate = useNavigate()
    const handleOpen = () => {
        ctx.handleMeal({
            id: props.id,
            food: props.food,
            img: props.img,
            price: props.price === '' && props.priceForOne === '' ?
                    props.pricePerSpoon: 
                    props.price === '' && props.pricePerSpoon === ''?
                    props.priceForOne:
                    props.price
        })
        navigate('/meal')
    }
    return (
        <React.Fragment>
            <li id={`${props.id}`} onClick={handleOpen} className='meal'>
                <div className="mealImage" style={{backgroundImage: `url(${props.img})`}}></div>
                <div className="pricePerQuantity">
                    <h4>{props.food}</h4>
                    <small>
                        {   
                            props.price === '' && props.priceForOne === '' ?
                            `₦${props.pricePerSpoon} PER SPOON` : 
                            props.price === '' && props.pricePerSpoon === ''?
                            `₦${props.priceForOne} FOR ONE` :
                            `₦${props.price}`
                        }
                    </small>
                </div>
            </li>
        </React.Fragment> 

    );
}
export default Meal;