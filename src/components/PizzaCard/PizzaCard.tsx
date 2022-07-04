import classes from "./PizzaCard.module.scss";
import { IPizza } from "../../store/types";
import { type } from "os";
import classNames from "classnames";
import Button from "../UI/Buttons/CardButton";

const renderTypeOfDough = (type: number) => {
  return type === 0 ? "тонкое" : "традиционное";
};

const PizzaCard: React.FC<IPizza> = (pizza) => {
  return (
    <>
      <div className={classes.container}>
        <img className={classes.image} src={pizza.imageUrl} alt="pizza" />
        <div className={classes.title}>{pizza.title}</div>
        <div className={classes.selector}>
          <ul className={classes.types}>
            {pizza.types.map((type, index) => (
              <li key={type + index} className={classes.type}>
                {renderTypeOfDough(type)}
              </li>
            ))}
          </ul>
          <ul className={classes.sizes}>
            {pizza.sizes.map((size, index) => (
              <li key={size + index} className={classes.size}>
                {size + " см."}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.blockBottom}>
          <div>{"от " + pizza.price + " ₽"}</div>
          <Button text="Добавить" />
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
