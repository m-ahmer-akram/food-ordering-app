import React, { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import { Modal } from "../UI/Modal";
import styles from "./Cart.module.scss";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((item) => (
          <li className={styles["cart-item"]} key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <div className={styles.summary}>
                <span className={styles.price}>${item.price}</span>
                <span className={styles.amount}>x {item.amount}</span>
              </div>
            </div>
            <div className={styles.actions}>
              <button onClick={cartItemRemoveHandler.bind(null, item.id)}>
                −
              </button>
              <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
