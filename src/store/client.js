import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class ClientState {
  isLoading = false;
  error = "";
  message = "";
  // language = "";
  // theme = "";
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "clientState",
      properties: ["isLoading", "error", "message"],
      storage: window.localStorage,
    });
  }
  setIsLoading = (bool) => {
    this.isLoading = bool;
  };
  setError = (errMessage) => {
    this.error = errMessage;
  };
  setMessage = (message) => {
    this.message = message;
  };

  get orderNumber() {
    return this.message;
  }
}
export default new ClientState();
