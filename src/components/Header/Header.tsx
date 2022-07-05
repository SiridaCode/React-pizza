import BasketButton from "../UI/Buttons/BasketButton";
import CustomSearch from "../UI/CustomSearch/CustomSearch";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <div className={classes["logo-container"]}>
        <img width="38px" src="./pizza_logo.svg" alt="logo" />
        <div>
          <h1 className={classes["logo"]}>React Pizza v2</h1>
          <p>Самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <CustomSearch />
      <BasketButton firstText="0 ₽" secondText="0 шт" />
    </header>
  );
};

export default Header;
