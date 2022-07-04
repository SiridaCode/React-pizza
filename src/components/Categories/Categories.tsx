import classes from "./Categories.module.scss";
import CategoriesButton from "../UI/Buttons/CategoriesButton";
import cn from "classnames";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import category from "../../store/categories";

const Categories: React.FC = observer(() => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className={classes["container-category"]}>
      {categories.map((item: string, index) => (
        <CategoriesButton
          key={index + " " + item}
          text={item}
          activeCategory={category.activeCategory}
        />
      ))}
    </div>
  );
});

export default Categories;
