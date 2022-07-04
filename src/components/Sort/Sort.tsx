import { useState } from "react";
import classes from "./Sort.module.scss";

const Sort = () => {
  const [openSelect, setOpenSelect] = useState(false);
  return (
    <div>
      <b>Сортировка по: </b>
      <span
        onClick={() => setOpenSelect(!openSelect)}
        className={classes["sort"]}
      >
        популярности
      </span>
      {openSelect && (
        <div className={classes["sort-modal"]}>
          <ul>
            <li>популярности</li>
            <li>популярности</li>
            <li>популярности</li>
            <li>популярности</li>
            <li>популярности</li>
            <li>популярности</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
