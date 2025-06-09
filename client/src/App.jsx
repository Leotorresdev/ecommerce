import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import Navbar  from "./components/Navbar"
import ShopSection from "./components/ShopSection"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import ProtectedRoute from "./components/ProtectedRoute"
import Register from "./pages/Register"
import { useEffect } from "react"
import useCartStore from "./store/cartStore"
import useUserStore from "./store/userStore"

 


function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ShopSection/>
      <ContactSection/>
    </>
  )
}

function App() {
  const hydrateCart = useCartStore((state) => state.hydrate);
  const hydrateUser = useUserStore((state) => state.hydrate);

  useEffect(() => {
    hydrateCart();
    hydrateUser(); // <-- hidrata el usuario al cargar la app
  }, [hydrateCart, hydrateUser]);
  useEffect(() => {
  useUserStore.getState().hydrate();
}, []);


  return (
    <BrowserRouter>
      <div className="bg-black text-white font-sans">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/carrito"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        <footer className="bg-black text-white py-6 text-center text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Innova. Todos los derechos reservados.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
