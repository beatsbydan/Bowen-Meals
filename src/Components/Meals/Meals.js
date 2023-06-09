import React from 'react';
import MealItems from './MealItems';
import './Meals.css'
import Meal from './Meal/Meal';
const Meals = () => {
    return ( 
        <React.Fragment>
            <div className="meals">
                <div className="edibles">
                    <button>FOOD</button>
                    <button>DRINKS</button>
                </div>
                <ul className='mealItems'>
                    {MealItems.map(meal=>{
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
                    })}
                </ul>
            </div>
            
        </React.Fragment>
    );
}

export default Meals;