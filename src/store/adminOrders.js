import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { getOrders, updateOrder, deleteOrder } from "../API/ordersAPI";
import adminState from "./adminState";

class AdminOrders {
  orders = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "adminOrders",
      properties: ["orders"],
      storage: window.localStorage,
    });
  }

  getAdminOrdersAction = async () => {
    adminState.setIsLoading(true);
    const result = await getOrders();

    runInAction(() => {
      adminState.setIsLoading(false);
      if (result.error) {
        adminState.setError(result.error);
        return;
      }
      this.orders = result.data;
    });
  };

  updateAdminOrderAction = async (order) => {
    adminState.setIsLoading(true);
    const result = await updateOrder(order);

    runInAction(() => {
      adminState.setIsLoading(false);
      if (result.error) {
        adminState.setError(result.error);
        return;
      }
      this.getAdminOrdersAction();
    });
  };

  deleteAdminOrderAction = async (order) => {
    console.log("deleteAdminOrderAction", order);
    adminState.setIsLoading(true);
    const result = await deleteOrder(order);

    runInAction(() => {
      adminState.setIsLoading(false);
      if (result.error) {
        adminState.setError(result.error);
        return;
      }
      this.getAdminOrdersAction();
    });
  };
}

export default new AdminOrders();
