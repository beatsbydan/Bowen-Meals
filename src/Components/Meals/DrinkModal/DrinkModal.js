import { useNavigate } from 'react-router-dom';
import './DrinkModal.css'
import React,  { useContext } from 'react';
import MealContext from '../../../Contexts/MealContext/MealContext';
import Navbar from '../../Header/Navbar/Navbar';
const DrinkModal = () => {
    const ctx = useContext(MealContext)
    const myCaf = localStorage.getItem('currCaf')
    const navigate = useNavigate()
    const handleReturn = () => {
        ctx.clearDrinks()
        navigate(`/${myCaf.toLowerCase()}`)
    }
    const addToCart = () =>{
        ctx.addToCart({
            id: ctx.drink.id,
            name: ctx.drink.drink,
            img: ctx.drink.img,
            pcs: ctx.pieces,
            totalDrinkPrice: ctx.totalDrinkPrice
        })
        navigate(`/${myCaf.toLowerCase()}`)
    }
    return ( 
        <React.Fragment>
            <Navbar/>
            <div className="drinkBlock">
                <h2 className='drink'>{ctx.drink.drink}</h2>
                <div className="modalBlock">
                    <div className="modalLeft" style={{backgroundImage: `url(${ctx.drink.img}`}}></div>
                    <div className="modalRight">
                        <div className="numberOfPieces">
                            <button onClick={()=>ctx.addDrink(ctx.drink)} className="increment">+</button>
                            <div>{ctx.pieces} PCS</div>
                            <button onClick={()=>ctx.removeDrink(ctx.drink)} className="decrement">-</button>
                        </div>
                        <div className="price"> ₦{ctx.totalDrinkPrice}</div>
                        <button onClick={addToCart} className="addToCart">ADD TO CART</button>
                        <button onClick={handleReturn} className="addMore">SELECT MORE</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DrinkModal;