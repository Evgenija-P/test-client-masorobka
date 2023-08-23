import { Navigate } from "react-router-dom";

import { observer } from "mobx-react-lite";
import auth from "./store/auth";

export const PrivateRoute = observer(({ children }) => {
  return auth.isAuth ? children : <Navigate to="/admin" />;
});

export const RedirectRoute = observer(({ children }) => {
  return auth.isAuth ? <Navigate to="/admin/authorized/products" /> : children;
});