import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import SideBar from "./adminSections/sideBar";
import { observer } from "mobx-react-lite";
import authStore from "./store/auth";
import AlertPopup from "./components/UIKit/AlertPopup";
import RingLoader from "react-spinners/RingLoader";

const AdminPage = observer(() => {
  const { token, isLoading, error, setError, getCurrentAction } = authStore;

  useEffect(() => {
    if (token) getCurrentAction();
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center">
      <RingLoader color="red" loading size={120} />
    </div>
  ) : (
    <>
      <div className="flex bg-bg-black h-full max-w-full">
        <SideBar />
        <Outlet />
      </div>

      {authStore.error && (
        <AlertPopup onOk={() => setError("")}>
          <h1>{error}</h1>
        </AlertPopup>
      )}
    </>
  );
});

export default AdminPage;
