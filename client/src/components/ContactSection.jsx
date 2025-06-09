function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-black">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contáctanos</h2>
        <form className="space-y-6">
        <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded-lg" />
        <textarea rows="5" placeholder="Mensaje" className="w-full p-3 border rounded-lg resize-none"></textarea>
        <button type="submit" className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Enviar</button>
        </form>
      </div>
    </section>
  );
}
export default ContactSection;
