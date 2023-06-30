import { useContext } from 'react';
import React from 'react'
import './Cart.css'
import MealContext from '../../../Contexts/MealContext/MealContext';
import CartItem from './CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Header/Navbar/Navbar';
const Cart = () => {
    const navigate = useNavigate()
    const ctx = useContext(MealContext)
    const currCaf = localStorage.getItem('currCaf')
    const handleSuccess = () => {
        ctx.clearCart()
        navigate('/pay')
    }
    const totalPrice = ctx.cartItems.map(item=>item.totalMealPrice|| item.totalDrinkPrice).reduce((acc,val)=>{
        return (
            acc + val
        )
    },0)
    return ( 
        <React.Fragment>
            <Navbar/>
            <div className="cart">
                <div className={ctx.cartSize > 0 ? "cartLeft" : ""}>
                    {ctx.cartSize > 0 &&<h2>{!currCaf ? '' : currCaf.toLocaleUpperCase()}</h2>}
                    {ctx.cartSize === 0 ? <h1 className='defaultStatement'>No items here!</h1>:<ul>
                        {ctx.cartItems.map(item=>{
                            return(
                                <CartItem
                                    key = {item.id}
                                    id = {item.id}
                                    food = {item.food}
                                    drink = {item.name}
                                    pcs = {item.pcs}
                                    spoons = {item.spoons}
                                    img = {item.img}
                                    totalMealPrice = {item.totalMealPrice}
                                    totalDrinkPrice = {item.totalDrinkPrice}
                                />
                            )
                        })}
                    </ul>}
                    {ctx.cartSize > 0 &&<div className="cartTotal">
                        <span>TOTAL:<span> ₦{totalPrice}.</span></span>
                    </div>}
                    {ctx.cartSize > 0 &&<div className="actions">
                        <button onClick = {handleSuccess}>CHECKOUT</button>
                        <button onClick={ctx.clearCart}>CLEAR</button>
                    </div>}
                </div>
                {ctx.cartSize > 0 && <div className="cartRight">
                    <h3>TRANSFER TO THE BANK BELOW USING USSD OR BANK TRANSFER</h3>
                    <div className="accountBlock">
                        <h3>ACCOUNT NUMBER: 0099876545</h3>
                        <h3>BANK NAME: MONIEPOINT </h3>
                        <h3>ACCOUNT NAME: {currCaf.toUpperCase()} ONE</h3>
                    </div>
                    <div className="upload">
                        <button onClick={handleSuccess}>UPLOAD RECEIPT</button>
                    </div>
                </div>}
            </div>
        </React.Fragment>
    );
}

export default Cart;
