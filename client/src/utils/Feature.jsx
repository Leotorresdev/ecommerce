import { motion } from "framer-motion";

export function Feature({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-black text-white p-6 rounded-2xl shadow-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </motion.div>
  );
}
