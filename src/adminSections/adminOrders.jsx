import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import adminOrdersStore from "../store/adminOrders";
import adminState from "../store/adminState";
import { RingLoader } from "react-spinners";
import AlertPopup from "../components/UIKit/AlertPopup";
import OrdersTable from "../components/OrdersTable";
import ButtonMain from "../components/UIKit/button";

const Orders = observer(() => {
  const [archived, setArchived] = useState(false);

  useEffect(() => {
    adminOrdersStore.getAdminOrdersAction();
  }, []);

  return (
    <div className="w-[80vw] bg-bg-black">
      <div className="flex mb-7 w-full">
        <div className="mx-auto w-[240px]"></div>
        <h2 className="mt-8 text-3xl text-txt-main-white text-center font-medium">
          {archived ? "Архів замовлень" : "Список замовлень"}
        </h2>
        <ButtonMain style="redMedium" btnClass={"mt-6 mx-0"} clickFn={() => setArchived(!archived)}>
          {archived ? "До замовлень" : "Архів"}
        </ButtonMain>
      </div>

      {adminState.isLoading ? (
        <div className="flex h-2/4 justify-center items-center">
          <RingLoader color="red" loading size={120} />
        </div>
      ) : (
        <>
          <OrdersTable orders={adminOrdersStore.orders} archivedFilter={archived} />

          {adminState.error && (
            <AlertPopup onOk={() => adminState.setError("")}>
              <h1>{adminState.error}</h1>
            </AlertPopup>
          )}
        </>
      )}
    </div>
  );
});

export default Orders;
