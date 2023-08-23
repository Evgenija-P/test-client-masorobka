const OrderItemProductList = ({ products }) => (
  products.map((prod, idx) => (
    <li className="flex pl-4 w-[640px]" key={prod.product ? prod.product.name : idx}>
      <p>{idx+1})</p>
      <p className="w-[300px] text-left pl-2">{prod.product ? prod.product.name : "не знайдено"}</p>
      <p className="w-[120px] text-center">{prod.quantity}</p>
      <p className="w-[120px] text-right">{prod.quantity * (prod.product ? prod.product.price : 0) }</p>
    </li>
  ))
)

export default OrderItemProductList;
