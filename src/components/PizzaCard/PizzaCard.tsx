import classes from "./PizzaCard.module.scss";
import { IPizza } from "../../store/types";
import cn from "classnames";
import Button from "../UI/Buttons/CardButton";
import { useState } from "react";

const PizzaCard: React.FC<IPizza> = (pizza) => {
  const typeNames = ["тонкое", "традиционное"];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const classActive = (className: string, typeOrSizeId: number) => {
    const state = className === "type--dough" ? activeType : activeSize;
    return cn(classes[className], {
      [classes.active]: state === typeOrSizeId,
    });
  };

  return (
    <>
      <div className={classes.container}>
        <img className={classes.image} src={pizza.imageUrl} alt="pizza" />
        <div className={classes.title}>{pizza.title}</div>
        <div className={classes.selector}>
          <ul className={classes.types}>
            {pizza.types.map((type, index) => (
              <li
                key={type + index}
                onClick={() => setActiveType(type)}
                className={classActive("type--dough", type)}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul className={classes.sizes}>
            {pizza.sizes.map((size, index) => (
              <li
                key={size + index}
                onClick={() => setActiveSize(size)}
                className={classActive("size--dough", size)}
              >
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
