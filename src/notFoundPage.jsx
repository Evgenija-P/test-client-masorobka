import { useNavigate } from "react-router";
import ButtonMain from "./components/UIKit/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-8 justify-center items-center w-[640px] h-[480px] bg-bg-black rounded-3xl text-txt-main-white">
        <h1>Page 404</h1>
        <p>Ой. десь не туди попали</p>
        <ButtonMain clickFn={() => navigate("/admin")} style="redLarge">
          На головну
        </ButtonMain>
      </div>
    </div>
  );
}