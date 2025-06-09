# Tienda 2.0

Tienda 2.0 es una aplicación web de e-commerce desarrollada con **React**, **Node.js**, **Express** y **Prisma** sobre una base de datos **PostgreSQL**. Permite a los usuarios ver, agregar al carrito, crear y eliminar productos (CRUD), así como registrarse e iniciar sesión de manera segura con autenticación JWT.

---

## Tecnologías utilizadas

- **Frontend**
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [Zustand](https://zustand-demo.pmnd.rs/) (manejo de estado)
  - [React Router DOM](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Framer Motion](https://www.framer.com/motion/) (animaciones)
- **Backend**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Prisma ORM](https://www.prisma.io/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [JWT](https://jwt.io/) (autenticación)
  - [bcrypt](https://www.npmjs.com/package/bcrypt) (hash de contraseñas)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [CORS](https://www.npmjs.com/package/cors)
  - [Morgan](https://www.npmjs.com/package/morgan) (logs)

---

## Estructura del proyecto

```
/client    # Frontend React
/server    # Backend Node.js/Express/Prisma
```

---

## Instalación y ejecución

### 1. Clonar el repositorio

```sh
npm install
npm run dev
```

### 2. Configuración del backend

```sh
npm install
npm start
```

- Crea un archivo `.env` en `/server` con el siguiente contenido:

  ```
  DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/tu_basededatos
  JWT_SECRET=un_secreto_seguro
  ```

- Ejecuta las migraciones de Prisma y pobla la base de datos:

  ```sh
  npx prisma migrate deploy
  node prisma/client.js
  ```

- Inicia el servidor backend:

  ```sh
  npm start
  ```

  El backend correrá en [http://localhost:3001](http://localhost:3001)

---

### 3. Configuración del frontend

```sh
cd ../client
npm install
```

- Inicia el frontend:

  ```sh
  npm run dev
  ```

  El frontend correrá en [http://localhost:5173](http://localhost:5173)

---

## Funcionalidades principales

- **Registro e inicio de sesión** con autenticación JWT.
- **CRUD de productos** (ver, crear, eliminar) solo para usuarios autenticados.
- **Carrito de compras** persistente en localStorage.
- **Animaciones y diseño responsivo** con Tailwind y Framer Motion.

---

## Notas importantes

- Para crear o eliminar productos debes estar autenticado.
- El backend y frontend deben estar corriendo simultáneamente.
- Puedes modificar los datos de ejemplo en `server/prisma/client.js`.

---

## Scripts útiles

- **Backend**
  - `npm start` — Inicia el servidor con nodemon.
  - `node prisma/client.js` — Rellena la base de datos con productos de ejemplo.
- **Frontend**
  - `npm run dev` — Inicia el servidor de desarrollo de React.

---

## Autor

- Leoferson torres 28246714
- link del video de youtube
  https://youtu.be/IfePL8xkUBY


---

¡Gracias por usar Tienda 2.0! Si tienes dudas, revisa el código fuente o contacta al autor.
