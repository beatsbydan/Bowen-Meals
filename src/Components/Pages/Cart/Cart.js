import { useContext } from 'react';
import './Cart.css'
import MealContext from '../../../Contexts/MealContext/MealContext';
import CartItem from './CartItem/CartItem';
const Cart = () => {
    const ctx = useContext(MealContext)
    const currCaf = localStorage.getItem('currCaf').toUpperCase()
    const total = ctx.cartItems.map(item=>item.totalPrice).reduce((acc, currVal)=>{
        return(
            acc + currVal
        )
    },0)
    return ( 
        <div className="cart">
            <h2>{currCaf}</h2>
            {ctx.cartItems.length === 0 ? <h1 className='defaultStatement'>No food items here!</h1>:<ul>
                {ctx.cartItems.map(item=>{
                    return(
                        <CartItem
                            key = {item.id}
                            id = {item.id}
                            food = {item.food}
                            spoons = {item.spoons}
                            img = {item.img}
                            totalPrice = {item.totalPrice}
                        />
                    )
                })}
            </ul>}
            <div className="cartTotal">
                <span>TOTAL: <span> ₦{total}</span></span>
            </div>
            <div className="actions">
                <button>CHECKOUT</button>
                <button onClick={ctx.clearCart}>CLEAR</button>
            </div>
        </div>
    );
}

export default Cart;
