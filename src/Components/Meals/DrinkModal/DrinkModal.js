import { useNavigate } from 'react-router-dom';
import './DrinkModal.css'
import React,  { useContext } from 'react';
import MealContext from '../../../Contexts/MealContext/MealContext';
const DrinkModal = () => {
    const ctx = useContext(MealContext)
    const myCaf = localStorage.getItem('currCaf')
    const navigate = useNavigate()
    const addDrink = () => {
        ctx.addDrink(ctx.drink)
    }
    const removeDrink = () => {
        ctx.removeDrink(ctx.drink)
    }
    const handleReturn = () => {
        ctx.clearDrinks()
        navigate(`/${myCaf.toLowerCase()}`)
    }
    const addToCart = () =>{
        ctx.addToCart({
            id: ctx.drink.id,
            name: ctx.drink.food,
            img: ctx.drink.img,
            pcs: ctx.pcs,
            totalDrinkPrice: ctx.totalDrinkPrice
        })
        navigate(`/${myCaf.toLowerCase()}`)
    }
    return ( 
        <React.Fragment>
            <h2 className='drink'>{ctx.drink.name}</h2>
            <div className="modalBlock">
                <div className="modalLeft" style={{backgroundImage: `url(${ctx.drink.img}`}}></div>
                <div className="modalRight">
                    <div className="numberOfPieces">
                        <button onClick={addDrink} className="increment">+</button>
                        <div>{ctx.pcs} PCS</div>
                        <button onClick={removeDrink} className="decrement">-</button>
                    </div>
                    <div className="price"> ₦{ctx.totalDrinkPrice}</div>
                    <button onClick={addToCart} className="addToCart">ADD TO CART</button>
                    <button onClick={handleReturn} className="addMore">SELECT MORE</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DrinkModal;