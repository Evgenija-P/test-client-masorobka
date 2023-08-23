import { observer } from "mobx-react-lite";
import auth from "./store/auth";
import AlertPopup from "./components/UIKit/AlertPopup";
import RingLoader from "react-spinners/RingLoader";
import LoginForm from "./components/Forms/loginForm";
import logo from "./images/logo.png";

const AdminLogin = observer(() => {
  // console.log("isAuth:", auth.isAuth);

  return (
    <div className="flex justify-center items-center h-screen">
      {auth.isLoading ?
        (<div className="">
          <RingLoader color="red" loading size={120} />
        </div>) :
        (<div className="w-[640px] h-[480px] bg-bg-black rounded-3xl">
          <div className="pt-8 pb-4">
            <img src={logo} alt="Logo" className="w-[108px] h-[108px] mx-auto" />
          </div>
          <LoginForm />
          {auth.error && <AlertPopup onOk={() => auth.setError("")}>
            <h1>{auth.error}</h1>
          </AlertPopup>}
        </div>)
      }
    </div>
  )
});
export default AdminLogin;
