import { motion as Motion } from "framer-motion";
import { Feature } from "../utils/Feature";
import aboutImg from "../assets/fondo.jpg"; 

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
      
        <div>
          <Motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Sobre Nosotros
          </Motion.h2>
          <p className="text-lg text-gray-700 mb-6">
            Somos una empresa enfocada en ofrecer productos <strong>inteligentes, sostenibles</strong> y con diseño centrado en el usuario. Nuestra misión es ayudarte a transformar tu día a día con innovación real.
          </p>

         
          <div className="grid gap-6 sm:grid-cols-2">
            <Feature
              icon="🚀"
              title="Tecnología"
              desc="Tecnología de punta aplicada a soluciones del futuro."
            />
            <Feature
              icon="🌱"
              title="Sostenibilidad"
              desc="Comprometidos con el planeta y sus recursos."
            />
            <Feature
              icon="🎨"
              title="Diseño"
              desc="Diseños modernos, útiles y visualmente atractivos."
            />
            <Feature
              icon="🤝"
              title="Confianza"
              desc="Miles de clientes satisfechos en toda Latinoamérica."
            />
          </div>
        </div>

        
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block"
        >
          <img
            src={aboutImg}
            alt="Sobre nosotros"
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
        </Motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
