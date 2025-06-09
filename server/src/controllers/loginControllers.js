const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../../prisma/client')

const Register = async (req, res) => {
    const { name, email, password } = req.body;

  try {
    const exist = await prisma.user.findUnique({ where: { email } });
    if (exist) return res.status(400).json({ message: "Usuario ya existe" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json({ message: "Usuario creado", user });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
}

const Login = async (req, res) => {
  console.log("BODY LOGIN", { email: req.body.email, password: req.body.password });
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    // No envíes la contraseña al frontend
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({ message: "Login exitoso", token, user: userWithoutPassword });
  } catch (error) {
    console.error(error); // Para ver el error real en consola
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { Register, Login };
