import { makeAutoObservable } from "mobx";

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
