import { makeAutoObservable } from "mobx";
import { IPizza } from "./types";

class Pizza {
  activeCategory: string = "Все";
  constructor() {
    makeAutoObservable(this);
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }
}

export default new Pizza();
