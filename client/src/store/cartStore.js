import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const productInCart = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (productInCart) {
      // Si ya está en el carrito, aumentamos cantidad
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Si no está, lo agregamos con cantidad 1
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    set({ cart: updatedCart });
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
  },

  removeFromCart: (productId) => {
    const updatedCart = get().cart.filter((item) => item.id !== productId);
    set({ cart: updatedCart });
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
  },

  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem("cart"); // Limpiar localStorage
  },

  hydrate: () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    set({ cart });
  }
}));

export default useCartStore;