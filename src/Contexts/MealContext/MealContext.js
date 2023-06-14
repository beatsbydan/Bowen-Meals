import React from "react";
const MealContext = React.createContext({
    spoons: 0,
    cartSize: 0,
    totalMealPrice: 0,
    pieces: 0,
    totalDrinkPrice: 0,
    cartItems: [],
    meal: {},
    drink: {},
    clearFood:()=>{},
    clearDrinks:()=>{},
    clearCart:()=>{},
    removeFromCart:()=>{},
    addFood: ()=>{},
    addDrink: ()=>{},
    removeFood: ()=>{},
    removeDrink: ()=>{},
    addToCart: ()=>{},
    handleMeal: ()=>{},
    handleDrink: ()=>{}
})
export default MealContext