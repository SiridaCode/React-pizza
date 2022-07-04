import { makeAutoObservable } from "mobx";
import { IPizza } from "./types";

class Pizza {
  pizzas: IPizza[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async fetchPizza(): Promise<void> {
    fetch("https://62bd5a25bac21839b6011ea5.mockapi.io/items/items").then(
      (res) =>
        res.json().then((data: IPizza[]) => {
          this.pizzas = data;
        })
    );
  }
}

export default new Pizza();
