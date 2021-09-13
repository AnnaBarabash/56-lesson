import { MealContext } from './MainF'

export default function Meal({ meal }) {
    return (
        <MealContext.Consumer>{
            context =>{
                return(
            <div className='col-lg-3 col-md-4 col-6 mb-2 d-flex align-items-stretch'>
                <div className="card mb-4" >
                    <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                    <div className="card-body d-flex flex-direction: row">
                        <h5 className="card-title">{meal.strMeal}</h5>
                        <p className="card-text">Rate: {meal.rate}</p>
                        <button className="btn btn-primary w-50 mx-auto align-self-end"
                                onClick = {()=>context.changeCurrentMeal(meal.idMeal)}>View comment</button>
                    </div>
                </div>
            </div>
                )
            }
        }
        </MealContext.Consumer>
    )
}

