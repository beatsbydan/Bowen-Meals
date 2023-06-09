import { useContext } from 'react';
import './CartItem.css'
import MealContext from '../../../../Contexts/MealContext/MealContext';
const CartItem = (props) => {
    const ctx = useContext(MealContext)
    return ( 
        <li className='item'>
            <button onClick={()=>ctx.removeFromCart(props.id)} className='remove'>X</button>
            <div className="mealItem">
                <div className="left" style={{backgroundImage: `url(${props.img})`}}></div>
                <div className="right">
                    <h4>{props.food}</h4>
                    <p>Spoons:<span>{props.spoons}</span></p>
                    <p>Price: <span>{props.totalPrice}</span></p>
                </div>
            </div>
        </li>
    );
}

export default CartItem;