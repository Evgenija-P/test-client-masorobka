import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Filter {
  categoryClient = "Всі продукти";
  categoryAdmin = "Всі продукти";

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: "filter", properties: ["categoryClient", "categoryAdmin"] });
  }

  setTextClient = (text) => {
    this.categoryClient = text;
  };
  setTextAdmin = (text) => {
    this.categoryAdmin = text;
  };
}

export default new Filter();
