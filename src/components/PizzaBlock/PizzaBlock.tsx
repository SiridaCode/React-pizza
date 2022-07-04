import pizza from "../../store/pizza";
import PizzaCard from "../PizzaCard/PizzaCard";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { IPizza } from "../../store/types";
import classes from "./PizzaBlock.module.scss";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";

const PizzaBlock: React.FC = observer(() => {
  useEffect(() => {
    pizza.fetchPizza();
  }, []);

  return (
    <div className={classes["main-container"]}>
      <div className={classes["content-top"]}>
        <Categories />
        <Sort />
      </div>
      <div className={classes["container-pizza"]}>
        {pizza.pizzas.slice(0, 4).map((item: IPizza) => (
          <PizzaCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default PizzaBlock;
