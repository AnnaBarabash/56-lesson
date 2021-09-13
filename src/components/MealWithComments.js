import Comments from './Comments'
import NewComment from './NewComment'

const MealWithComments = ({meal, showMeals})=>{
    return(
        <div className = 'row my-5'>
            <div className = 'col-sm-6'>
            <div className="card" >
                    <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                    <div className="card-body">
                        <h4 className="card-title">{meal.strMeal}</h4>
                        <p className="card-text">Rate: {meal.rate}</p>
                        <button className="btn btn-primary w-50 mx-auto align-self-end"
                                onClick = {showMeals}>show all meals</button>
                    </div>
                </div>
            </div>
            <div className = 'col-sm-6'>
                <Comments comments = {meal.comments}/>
                <NewComment idMeal = {meal.idMeal} />
            </div>
        </div>
    )
}

export default MealWithComments