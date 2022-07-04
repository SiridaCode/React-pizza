import classes from "./CategoriesButton.module.scss";

type CategoriesButtonProps = {
  text: string;
};

const CategoriesButton: React.FC<CategoriesButtonProps> = ({ text }) => {
  return (
    <>
      <button className={classes["button"]}>
        <img className={classes["image"]} src="./plus.png" alt="Плюс" />
        <span className={classes["text"]}>{text}</span>
      </button>
    </>
  );
};

export default CategoriesButton;
