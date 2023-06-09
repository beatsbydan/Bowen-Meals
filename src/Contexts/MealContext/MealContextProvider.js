import { useReducer, useState } from "react";
import MealContext from "./MealContext";

const MealContextProvider = (props) => {
    const [meal, setMeal] = useState({})
    const [cartItems, setCartItems] = useState([])
    const defaultItems = {
        spoons: 0,
        totalPrice: 0,
    }
    const foodReducer = (state, action) => {
        if(action.type === 'ADD'){
            const newSpoons = state.spoons + 1
            const newTotalPrice = state.totalPrice + (action.meal.price)
            return{
                spoons: newSpoons,
                totalPrice: newTotalPrice
            }
        }
        if(action.type === 'REMOVE'){
            let newSpoons = state.spoons - 1
            let newTotalPrice = state.totalPrice - (action.meal.price)
            if(newSpoons < 0){
                newSpoons = 0
                newTotalPrice = 0
            }
            return{
                spoons: newSpoons,
                totalPrice: newTotalPrice
            }
        }
        if(action.type === 'CLEAR'){
            const newSpoons = 0
            const newTotalPrice = 0
            return{
                spoons: newSpoons,
                totalPrice: newTotalPrice
            }
        }
        return defaultItems;
    }
    const [myFood, dispatchMyFood] = useReducer(foodReducer,defaultItems)
    const handleMeal = (meal) => {
        setMeal(meal)
    }
    const addFood = (meal) =>{
        dispatchMyFood({type: 'ADD', meal:meal})
    }
    const removeFood = (meal) => {
        dispatchMyFood({type:'REMOVE', meal:meal})
    }
    const clear = () => {
        dispatchMyFood({type:'CLEAR'})
    }
    const addToCart = (meal) => {
        setCartItems(prev=>{
            return [...prev, meal]
        })
        dispatchMyFood({type:'CLEAR'})        
    }
    const removeFromCart = (id) => {
        const newCartItems = cartItems.filter(item=>{
            return item.id!== id
        })
        setCartItems(newCartItems)
    }
    const clearCart = () => {
        setCartItems([])
    }
    const updatedContext = {
        cartItems: cartItems,
        spoons: myFood.spoons,
        totalPrice: myFood.totalPrice,
        meal: meal,
        addFood: addFood,
        clear:clear,
        removeFood: removeFood,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart:clearCart,
        handleMeal: handleMeal
    }
    return ( 
        <MealContext.Provider value={updatedContext}>
            {props.children}
        </MealContext.Provider>
    );
}
export default MealContextProvider;