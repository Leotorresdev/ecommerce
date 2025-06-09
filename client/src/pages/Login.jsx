import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("login", email, password);
  e.preventDefault();
  if (!email || !password) {
    alert("Completa todos los campos");
    return;
  }
  const res = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (res.ok) {
    login(data.user, data.token); // Guarda usuario y token en Zustand/localStorage
    navigate("/carrito");         // Redirige al carrito
  } else {
    alert(data.message || "Error al iniciar sesión");
  }
};

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 bg-black p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-4 text-black"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-4 text-black"
        required
      />
      <button type="submit" className="w-full bg-green-600 text-black py-2 rounded">
        Ingresar
      </button>
    </form>
  );
}

export default Login;
