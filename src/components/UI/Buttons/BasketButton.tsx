import classes from "./BasketButton.module.scss";

const BasketButton = () => {
  return (
    <button className={classes["button"]}>
      <span> 0р</span>
      <div className={classes["button-divider"]} />
      <img className={classes["image"]} src="./plus.png" alt="Плюс" />
      <span className={classes["text"]}>0 шт</span>
    </button>
  );
};

export default BasketButton;
