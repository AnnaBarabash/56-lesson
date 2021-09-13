import React from 'react';
import getData from '../store/store';
import MealList from './MealList';
import MealWithComments from './MealWithComments';

export const MealContext = React.createContext();

export default class Main extends React.Component{
    state = {
        meals:getMealsFromJson(),
        currentMeal: null
    }

    changeCurrentMeal = (id) =>{
        const meals = this.state.meals
        const index = meals.findIndex(meal => meal.idMeal === id)
        const meal = {...meals[index]};
        this.setState({...this.state, currentMeal: meal})
    }

    showMeals = ()=>{
        this.setState({...this.state, currentMeal: null})
    }
    addComment = (id, comment) =>{
        const newMeals = [...this.state.meals]
        const index = newMeals.findIndex(meal => meal.idMeal === id)
        const meal = {...newMeals[index]};
        const newComments = [...meal.comments];
        newComments.push({...comment,id:Date.now(),note: +comment.note})
        meal.comments = newComments;
        meal.rate = (newComments.reduce((sum, comment) => sum += comment.note, 0)/newComments.length).toFixed(2);
        newMeals[index] = meal;
        this.setState({...this.state, meals: newMeals, currentMeal:meal })
    }

    render(){
        return(
           <MealContext.Provider value = {{
               changeCurrentMeal:this.changeCurrentMeal,
               addComment:this.addComment
           }}>
            <div className = 'container'>
                {this.state.currentMeal ? 
                <MealWithComments meal = {this.state.currentMeal}
                                  showMeals = {this.showMeals} />:
                <MealList meals ={this.state.meals} />
                 }       
            </div>
         </MealContext.Provider> 
        )
    }
}

function getMealsFromJson(){
    const meals = JSON.parse(getData()).meals;
    meals.forEach(el =>{
        el.comments =[];
        el.rate = 0
    })
    //console.log(meals)
    return meals
}

