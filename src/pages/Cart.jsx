import EmptyCart from "../components/EmptyCart";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="flex flex-col gap-10 bg-">
      <div className="text-3xl font-extrabold">SHOPPING BAG</div>
      {cart.length == 0 && <EmptyCart />}
      {cart && cart.length > 0 && (
        <ul>
          {cart.map((i) => (
            <>i</>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
