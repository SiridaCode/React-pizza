import classes from "./BasketButton.module.scss";

type BasketButtonProps = {
  firstText: string;
  secondText: string;
};

const BasketButton: React.FC<BasketButtonProps> = ({
  firstText,
  secondText,
}) => {
  return (
    <button className={classes["button"]}>
      <span>{firstText}</span>
      <div className={classes["button-divider"]} />
      <img className={classes["image"]} src="./plus.png" alt="Плюс" />
      <span className={classes["text"]}>{secondText}</span>
    </button>
  );
};

export default BasketButton;
