import classes from "./CustomSearch.module.scss";

const CustomSearch = () => {
  return (
    <div className={classes["search-container"]}>
      <img
        className={classes["search-icon"]}
        src="./search.png"
        alt="Иконка поиска"
      />
      <input className={classes["search-input"]} placeholder="Поиск пиццы..." />
    </div>
  );
};

export default CustomSearch;
