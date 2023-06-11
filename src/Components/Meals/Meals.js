import React, { useState } from 'react';
import MealItems from './MealItems';
import './Meals.css'
import Meal from './Meal/Meal';
import DrinkItems from './DrinkItems';
import Drink from './Drink/Drink';
const Meals = () => {
    const [type, setType] = useState('food')
    const handleFood = () => {
        setType('food')
    }
    const handleDrink = () => {
        setType('drink')
    }
    return ( 
        <React.Fragment>
            <div className="meals">
                <div className="edibles">
                    <button onClick={handleFood}>FOOD</button>
                    <button onClick={handleDrink}>DRINKS</button>
                </div>
                <ul className='mealItems'>
                    {type === 'food' ? MealItems.map(meal=>{
                        return(
                            <Meal
                                key={meal.id}
                                id={meal.id}
                                food= {meal.food}
                                price = {meal.price}
                                pricePerSpoon = {meal.pricePerSpoon}
                                priceForOne = {meal.priceForOne}
                                img={meal.img}
                            />
                        )
                    }):DrinkItems.map(drink=>{
                        return(
                            <Drink
                                key={drink.id}
                                id={drink.id}
                                drink= {drink.name}
                                price = {drink.price}
                                img={drink.img}
                            />
                        )
                    })}
                </ul>
            </div>
            
        </React.Fragment>
    );
}

export default Meals;