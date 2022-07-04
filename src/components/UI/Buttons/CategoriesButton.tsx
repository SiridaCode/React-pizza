import classNames from "classnames";
import classes from "./CategoriesButton.module.scss";

type CategoriesButtonProps = {
  text: string;
  active: boolean;
  onClick: any;
};

const CategoriesButton: React.FC<CategoriesButtonProps> = ({
  text,
  active,
}) => {
  const onClickCategory = () => {
    classNames({ button: true, active: active });
  };

  return (
    <>
      <button onClick={onClickCategory} className={classes["button"]}>
        <img
          width="30px"
          className={classes["image"]}
          src="./plus.png"
          alt="Плюс"
        />
        <span className={classes["text"]}>{text}</span>
      </button>
    </>
  );
};

export default CategoriesButton;
