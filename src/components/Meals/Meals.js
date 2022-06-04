import React, { useRef, useState, useContext } from "react";
import styles from "./Meals.module.scss";
import { CartContext } from "../../Store/CartContext";

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

export const Meals = (props) => {
  const cartCtx = useContext(CartContext);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount);
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  return (
    <React.Fragment>
      {/* Summary */}
      <section className={styles.summary}>
        <h2>Delicious Food, Delivered To You!</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
      {/* Available Meals */}
      <section className={styles.meals}>
        <div className={styles.card}>
          <ul>
            {DUMMY_MEALS.map((meal) => (
              <li className={styles.meal} key={meal.id}>
                <div>
                  <h3>{meal.name}</h3>
                  <div className={styles.description}>{meal.description}</div>
                  <div className={styles.price}>${meal.price.toFixed(2)}</div>
                </div>
                <div>
                  <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.input}>
                      <label htmlFor={"amount_" + meal.id}>Amount</label>
                      <input
                        ref={amountInputRef}
                        id={"amount_" + meal.id}
                        type="number"
                        min="1"
                        max="5"
                        step="1"
                        defaultValue="1"
                      />
                    </div>
                    <button>+ Add</button>
                    {!amountIsValid && (
                      <p className={styles.error_msg}>
                        Please Enter a Valid Amount (1-5).
                      </p>
                    )}
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};
