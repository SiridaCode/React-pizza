import pizza from "../../store/pizza";
import PizzaCard from "../PizzaCard/PizzaCard";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { IPizza } from "../../store/types";
import classes from "./PizzaBlock.module.scss";

const PizzaBlock: React.FC = observer(() => {
  useEffect(() => {
    pizza.fetchPizza();
  }, []);

  return (
    <div className={classes.container}>
      {pizza.pizzas.map((item: IPizza) => (
        <PizzaCard key={item.id} {...item} />
      ))}
    </div>
  );
});

export default PizzaBlock;
