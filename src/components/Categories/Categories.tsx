import classes from "./Categories.module.scss";
import CategoriesButton from "../UI/Buttons/CategoriesButton";
import cn from "classnames";
import { useState } from "react";

type categoriesProps = {
  category: string;
  active: boolean;
};

const Categories: React.FC = () => {
  const categories = [
    { category: "Все", active: false },
    { category: "Мясные", active: false },
    { category: "Вегетарианская", active: false },
    { category: "Гриль", active: false },
    { category: "Острые", active: false },
    { category: "Закрытые", active: false },
  ];
  const [stateCategories, setStateCategories] = useState(categories);

  const onClickCategory = (category: string) => {
    setStateCategories([...stateCategories]);
  };

  return (
    <div className={classes["container-category"]}>
      {categories.map((item: categoriesProps, index) => (
        <CategoriesButton
          key={index + " " + item}
          onClick={() => onClickCategory(item.category)}
          text={item.category}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default Categories;
