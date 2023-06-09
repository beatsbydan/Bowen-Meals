import React from "react";
const MealContext = React.createContext({
    spoons: 0,
    totalPrice: 0,
    cartItems: [],
    meal: {},
    clear:()=>{},
    clearCart:()=>{},
    removeFromCart:()=>{},
    addFood: ()=>{},
    removeFood: ()=>{},
    addToCart: ()=>{},
    handleMeal: ()=>{}
})
export default MealContext