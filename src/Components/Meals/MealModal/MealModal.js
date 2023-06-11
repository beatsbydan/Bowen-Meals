import React, { useContext } from 'react';
import './MealModal.css'
import MealContext from '../../../Contexts/MealContext/MealContext';
import { useNavigate } from 'react-router-dom';
const MealModal = () => {
    const myCaf = localStorage.getItem('currCaf')
    const navigate = useNavigate()
    const ctx = useContext(MealContext)
    const addFood = () => {
        ctx.addFood(ctx.meal)
    }
    const removeFood = () => {
        ctx.removeFood(ctx.meal)
    }
    const handleReturn = () => {
        ctx.clearFood()
        navigate(`/${myCaf.toLowerCase()}`)
    }
    const addToCart = () =>{
        ctx.addToCart({
            id: ctx.meal.id,
            food: ctx.meal.food,
            img: ctx.meal.img,
            spoons: ctx.spoons,
            totalMealPrice: ctx.totalMealPrice
        })
        navigate(`/${myCaf.toLowerCase()}`)
    }
    return ( 
        <React.Fragment>
            <h2 className='food'>{ctx.meal.food}</h2>
            <div className="modalBlock">
                <div className="modalLeft" style={{backgroundImage: `url(${ctx.meal.img}`}}></div>
                <div className="modalRight">
                    <div className="numberOfSpoons">
                        <button onClick={addFood} className="increment">+</button>
                        <div>{ctx.spoons} SPOONS</div>
                        <button onClick={removeFood} className="decrement">-</button>
                    </div>
                    <div className="price"> ₦{ctx.totalMealPrice}</div>
                    <button onClick={addToCart} className="addToCart">ADD TO CART</button>
                    <button onClick={handleReturn} className="addMore">SELECT MORE</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MealModal;