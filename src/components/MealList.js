import Meal from './Meal'

export default function MealList({meals}){
    return(
        <div className = 'row my-2'>
        <h2 className = 'my-3'>Meals this Chicken</h2>
        {meals.map(el => <Meal key = {el.idMeal} meal = {el} /> )}
        </div>
    )
}