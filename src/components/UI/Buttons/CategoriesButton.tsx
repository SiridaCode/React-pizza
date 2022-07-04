import classNames from "classnames";
import classes from "./CategoriesButton.module.scss";

type CategoriesButtonProps = {
  text: string;
  active: boolean;
  onClick: any;
  key: any;
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
        <span className={classes["text"]}>{text}</span>
      </button>
    </>
  );
};

export default CategoriesButton;
