import { TiShoppingCart } from "react-icons/ti";

function CartWidget() {
  return (
    <div className="carrito">
        <TiShoppingCart size="50px"/>
        <span className="badge">3</span>
    </div>
  )
}

export default CartWidget