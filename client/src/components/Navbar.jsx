import { useState } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import logo from "../assets/icono.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false); // Cierra el menú en modo mobile al hacer clic
  };

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre nosotros", href: "#about" },
    { name: "Tienda", href: "#shop" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center p-6 bg-white text-black shadow-md sticky top-0 z-50">
      {/* Logo e identidad */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
        <span className="text-xl sm:text-2xl font-bold">Innova</span>
      </div>

      {/* Menú de navegación */}
      <ul
        className={`md:flex gap-6 text-lg ${
          menuOpen ? "block" : "hidden"
        } absolute md:static bg-white md:bg-transparent top-full left-0 w-full md:w-auto p-6 md:p-0 z-40`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`block py-2 relative transition-colors duration-300 ${
                activeLink === link.href ? "text-black" : "hover:text-green-600"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-green-500 after:transition-all after:duration-300 ${
                activeLink === link.href
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Iconos */}
      <div className="flex items-center gap-4">
        <FaUserCircle className="text-3xl hover:text-gray-600 cursor-pointer" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <FaBars className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
