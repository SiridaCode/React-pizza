import classes from "./CardButton.module.scss";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className={classes["button"]}>
      <img className={classes["image"]} src="./plus.png" alt="Плюс" />
      <span className={classes["text"]}>{text}</span>
    </button>
  );
};

export default Button;
