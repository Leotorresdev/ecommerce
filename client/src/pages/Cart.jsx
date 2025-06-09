import useCartStore from "../store/cartStore";
import useUserStore from "../store/userStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const user = useUserStore((state) => state.user);
      console.log("Carrito:", cart);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>
      {user && <p className="mb-4">Bienvenido, {user.name}</p>}
      {cart.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2 border p-4 rounded">
              {item.title} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;