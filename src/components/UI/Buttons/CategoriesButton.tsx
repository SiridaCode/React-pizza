import cn from "classnames";
import classes from "./CategoriesButton.module.scss";
import category from "../../../store/categories";

type CategoriesButtonProps = {
  text: string;
  activeCategory: string;
  onClick: any;
  key: any;
};

const CategoriesButton: React.FC<CategoriesButtonProps> = ({
  text,
  activeCategory,
}) => {
  const classActive = cn(classes.button, {
    [classes.active]: activeCategory === text,
  });

  const onClickCategory = () => {
    category.setActiveCategory(text);
  };

  return (
    <>
      <button onClick={onClickCategory} className={classActive}>
        <span className={classes["text"]}>{text}</span>
      </button>
    </>
  );
};

export default CategoriesButton;
