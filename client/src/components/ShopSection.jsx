import { motion as Motion } from "framer-motion";
import { useState, useEffect } from "react";
import useCartStore from "../store/cartStore";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import ProductAdmin from "./ProductAdmin";

function ShopSection() {
  const [products, setProducts] = useState([]);
  const user = useUserStore((state) => state.user);

  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  // Función para cargar productos
  const fetchProductos = async () => {
    try {
      const res = await fetch('http://localhost:3001/productos');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // Añadir al carrito con depuración
  const handleAddToCart = (product) => {

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("¿Eliminar producto?")) return;
    const res = await fetch(`http://localhost:3001/productos/${id}`, {
      method: "DELETE",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (res.ok) {
      setProducts(products.filter(p => p.id !== id));
    } else {
      alert("Error al eliminar producto");
    }
  };

  return (
    <section id="shop" className="py-20 px-6 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Productos</h2>
        
        {/* Formulario de administración solo visible si hay usuario logueado */}
        {user && (
          <ProductAdmin onProductAdded={fetchProductos} />
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <Motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300"
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.title}</h3>
                  <p className="text-lg text-green-600 font-medium mb-4">${p.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddToCart(p)}
                  className="mt-auto w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  Añadir al carrito
                </button>
                {/* Botón eliminar solo para usuarios autenticados */}
                {user && (
                  <button
                    type="button"
                    onClick={() => handleDelete(p.id)}
                    className="mt-2 w-full bg-red-600 text-white py-1 rounded hover:bg-red-800 transition"
                  >
                    Eliminar
                  </button>
                )}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopSection;