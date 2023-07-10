import React, { useContext } from 'react';
import './MealModal.css'
import MealContext from '../../../Contexts/MealContext/MealContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Header/Navbar/Navbar';
const MealModal = () => {
    const myCaf = localStorage.getItem('currCaf')
    const navigate = useNavigate()
    const ctx = useContext(MealContext)
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
            <Navbar/>
            <h2 className='food'>{ctx.meal.food}</h2>
            <div className="modalBlock">
                <div className="modalLeft leftMeal" style={{backgroundImage: `url(${ctx.meal.img}`}}></div>
                <div className="modalRight">
                    <div className="numberOfSpoons">
                        <button onClick={()=>ctx.addFood(ctx.meal)} className="increment">+</button>
                        <div>{ctx.spoons} SPOONS</div>
                        <button onClick={()=>ctx.removeFood(ctx.meal)} className="decrement">-</button>
                    </div>
                    <div className="price"> ₦{ctx.totalMealPrice}</div>
                    <button onClick={addToCart} className="addToCart">ADD TO CART</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MealModal;