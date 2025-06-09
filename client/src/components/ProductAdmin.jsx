import { useState } from "react";

export default function ProductAdmin({ onProductAdded }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3001/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ title, price: parseFloat(price), imageUrl }),
    });
    if (res.ok) {
      setTitle("");
      setPrice("");
      setImageUrl("");
      onProductAdded();
      alert("Producto creado");
    } else {
      alert("Error al crear producto");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow max-w-md mx-auto">
      <h3 className="font-bold mb-2 text-black">Agregar producto</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" className="block w-full mb-2 p-2 border rounded text-black" required />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Precio" type="number" step="0.01" className="block w-full mb-2 p-2 border rounded text-black" required />
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="URL de imagen" className="block w-full mb-2 p-2 border rounded text-black" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Crear</button>
    </form>
  );
}