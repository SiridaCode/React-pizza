import classes from "./Sort.module.scss";

const Sort = () => {
  return (
    <div>
      <b>Сортировка по: </b>
      <span className={classes["sort"]}>популярности</span>
    </div>
  );
};

export default Sort;
