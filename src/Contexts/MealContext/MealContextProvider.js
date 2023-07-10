import { useReducer, useState } from "react";
import MealContext from "./MealContext";

const MealContextProvider = (props) => {
    const [meal, setMeal] = useState({})
    const [drink, setDrink] = useState({})
    const [cartItems, setCartItems] = useState([])
    const defaultFoodItems = {
        spoons: 0,
        totalMealPrice: 0,
    }
    const defaultDrinkItems = {
        pcs: 0,
        totalDrinkPrice: 0
    }
    const foodReducer = (state, action) => {
        if(action.type === 'ADD'){
            const newSpoons = state.spoons + 1
            const newTotalMealPrice = state.totalMealPrice + (action.meal.price)
            return{
                spoons: newSpoons,
                totalMealPrice: newTotalMealPrice
            }
        }
        if(action.type === 'REMOVE'){
            let newSpoons = state.spoons - 1
            let newTotalMealPrice = state.totalMealPrice - (action.meal.price)
            if(newSpoons < 0){
                newSpoons = 0
                newTotalMealPrice = 0
            }
            return{
                spoons: newSpoons,
                totalMealPrice: newTotalMealPrice
            }
        }
        if(action.type === 'CLEAR'){
            const newSpoons = 0
            const newTotalMealPrice = 0
            return{
                spoons: newSpoons,
                totalMealPrice: newTotalMealPrice
            }
        }
        return defaultFoodItems;
    }
    const drinkReducer = (state, action) => {
        if(action.type === 'ADD'){
            const newPcs = state.pcs + 1
            const newTotalDrinkPrice = state.totalDrinkPrice + (action.drink.price)
            return{
                pcs: newPcs,
                totalDrinkPrice: newTotalDrinkPrice
            }
        }
        if(action.type === 'REMOVE'){
            let newPcs = state.pcs - 1
            let newTotalDrinkPrice = state.totalDrinkPrice - (action.drink.price)
            if(newPcs < 0){
                newPcs = 0
                newTotalDrinkPrice = 0
            }
            return{
                pcs: newPcs,
                totalDrinkPrice: newTotalDrinkPrice
            }
        }
        if(action.type === 'CLEAR'){
            const newPcs = 0
            const newTotalDrinkPrice = 0
            return{
                pcs: newPcs,
                totalDrinkPrice: newTotalDrinkPrice
            }
        }
        return defaultDrinkItems;
    }
    const totalPrice = cartItems.map(item=>item.totalMealPrice || item.totalDrinkPrice).reduce((acc,val)=>{
        return (
            acc + val
        )
    },0)
    const [myFood, dispatchMyFood] = useReducer(foodReducer,defaultFoodItems)
    const [myDrink, dispatchMyDrink] = useReducer(drinkReducer,defaultDrinkItems)
    const handleMeal = (meal) => {
        setMeal(meal)
    }
    const handleDrink = (drink) => {
        setDrink(drink)
    }
    const addFood = (meal) =>{
        dispatchMyFood({type: 'ADD', meal:meal})
    }
    const addDrink = (drink) => {
        dispatchMyDrink({type: 'ADD', drink:drink})
    }
    const removeFood = (meal) => {
        dispatchMyFood({type:'REMOVE', meal:meal})
    }
    const removeDrink = (drink) => {
        dispatchMyDrink({type:'REMOVE', drink:drink})
    }
    const clearFood = () => {
        dispatchMyFood({type:'CLEAR'})
    }
    const clearDrinks = () => {
        dispatchMyDrink({type:'CLEAR'})
    }
    const addToCart = (item) => {
        if(!cartItems.some(myItem=>{
            return(
                myItem.id === item.id
            )
        })){
            setCartItems(prev=>{
                return [...prev, item]
            })
        }
        dispatchMyFood({type:'CLEAR'})        
        dispatchMyDrink({type:'CLEAR'})        
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
        cartSize: cartItems.length,
        cartItems: cartItems,
        totalPrice: totalPrice,
        spoons: myFood.spoons,
        totalMealPrice: myFood.totalMealPrice,
        totalDrinkPrice: myDrink.totalDrinkPrice,
        pieces: myDrink.pcs,
        meal: meal,
        drink: drink,
        addFood: addFood,
        addDrink: addDrink,
        clearFood:clearFood,
        clearDrinks:clearDrinks,
        removeFood: removeFood,
        removeDrink: removeDrink,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart:clearCart,
        handleMeal: handleMeal,
        handleDrink: handleDrink
    }
    return ( 
        <MealContext.Provider value={updatedContext}>
            {props.children}
        </MealContext.Provider>
    );
}
export default MealContextProvider;