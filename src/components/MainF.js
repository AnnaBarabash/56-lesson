import React, { useState } from "react";
import getData from "../store/store";
import MealList from "./MealList";
import MealWithComments from "./MealWithComments";

export const MealContext = React.createContext();

export default function MainF() {
  const [meals, setMeals] = useState(getMealsFromJson());
  const [currentMeal, setCurrentMeal] = useState(null);

  function changeCurrentMeal(id) {
    const index = meals.findIndex((meal) => meal.idMeal === id);
    setCurrentMeal(meals[index]);
  }

  function showMeals() {
    setCurrentMeal(null);
  }

  function addComment(id, comment) {
    const newMeals = [...meals];
    const idx = newMeals.findIndex((meal) => meal.idMeal === id);
    newMeals[idx].comments.push({
      ...comment,
      id: Date.now(),
      note: +comment.note,
    });
    newMeals[idx].rate = (
      newMeals[idx].comments.reduce(
        (sum, comment) => (sum += comment.note),
        0
      ) / newMeals[idx].comments.length
    ).toFixed(2);
    setMeals(newMeals);
    setCurrentMeal(newMeals[id]);
  }

  return (
    <MealContext.Provider
      value={{
        changeCurrentMeal,
        addComment,
      }}
    >
      <div className="container">
        {currentMeal ? (
          <MealWithComments meal={currentMeal} showMeals={showMeals} />
        ) : (
          <MealList meals={meals} />
        )}
      </div>
    </MealContext.Provider>
  );
}

function getMealsFromJson() {
  const meals = JSON.parse(getData()).meals;
  meals.forEach((el) => {
    el.comments = [];
    el.rate = 0;
  });
  return meals;
}
