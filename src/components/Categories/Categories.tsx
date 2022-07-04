import classes from "./Categories.module.scss";
import CardButton from "../UI/Buttons/CardButton";
import CategoriesButton from "../UI/Buttons/CategoriesButton";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  return (
    <>
      {categories.map((category, index) => (
        <CategoriesButton text={category} />
      ))}
    </>
  );
};

export default Categories;
