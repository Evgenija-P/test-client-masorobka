import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { login, logout, getCurrent } from "../API/authOperations";

class Auth {
  isAuth = false;
  token = "";
  isLoading = false;
  error = "";
  message = "";

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {name: "auth", properties: ["isAuth", "token", "error"], storage: window.localStorage})
  }

  setIsAuth = bool => this.isAuth = bool;
  setToken = token => this.token = token;
  setIsLoading = bool => this.isLoading = bool;
  setError = errMessage => this.error = errMessage;
  setMessage = message => this.message = message;
  

  loginAction = async (credentials) => {
    try {
      this.isLoading = true;
      const { message, token } = await login(credentials);
      runInAction(() => {
        this.isLoading = false;

        if (token) {
          this.token = token;
          this.isAuth = true;
          this.error = "";

        } else {
          this.token = "";
          this.error = message;
        }
      })
    }
    catch (error) {
      this.setIsLoading(false);
      error.response ? 
      this.setError(error.response.data.message) : // server error  
      this.setError(error.message)  // no internet connection
    }
  }

  logoutAction = async () => {
    try {
      this.isLoading = true;
      await logout();
      runInAction(() => {
        this.isLoading = false;
        this.isAuth = false;
        this.token = "";
      })
    } catch (error) {
      this.setIsLoading(false);
      if (error.response) { // server error
        this.setError(error.response.data.message);
        this.setIsAuth(false);
        this.setToken("");
      } else {
        this.setError(error.message);   // no internet connection
      }
    }
  }

  getCurrentAction = async () => {
    try {
      console.log("getCurrentAction - token:", this.token);
      if (this.token) {
        this.setError("");
        await getCurrent(this.token);
      }

    } catch (error) {
      if (error.response) { // server error
        this.setIsAuth(false);
        this.setToken("");
      } else {
        this.setError(error.message);   // no internet connection
      }
    }
  }
}

export default new Auth();