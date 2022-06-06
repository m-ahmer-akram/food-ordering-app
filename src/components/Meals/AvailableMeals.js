import React from "react";
import { Card } from "../UI/Card";
import styles from "./AvailableMeals.module.scss";
import { MealItem } from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
          {/* // <li className={styles.meal} key={meal.id}>
            //   <div>
            //     <h3>{meal.name}</h3>
            //     <div className={styles.description}>{meal.description}</div>
            //     <div className={styles.price}>${meal.price.toFixed(2)}</div>
            //   </div>
            //   <div>
            //     
            //   </div>
            // </li> */}
        </ul>
      </Card>
    </section>
  );
};
