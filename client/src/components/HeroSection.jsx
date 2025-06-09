import { motion as Motion } from "framer-motion";


function HeroSection() {
  return (
    <section id="home" className="relative h-screen bg-fondo bg-cover bg-center">
      {/* Fondo animado de partículas */}
      

      {/* Capa oscura sobre fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 text-center z-10">
        <Motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Innovación que transforma
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Descubre productos únicos diseñados para mejorar tu vida diaria, con tecnología de vanguardia y un enfoque en la sostenibilidad.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mt-4 px-4"
        >
          <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-2">¡10% de Descuento!</h3>
            <p className="text-gray-700 text-sm">Usa el código <strong>INNOVA10</strong>.</p>
          </div>
          <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Envío Gratis</h3>
            <p className="text-gray-700 text-sm">En compras superiores a $50.</p>
          </div>
          <div className="bg-white bg-opacity-90 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Garantía 3 meses</h3>
            <p className="text-gray-700 text-sm">Confianza e innovación asegurada.</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

