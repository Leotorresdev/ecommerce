const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = 3001;
const morgan = require('morgan');
 const productRouter = require('./src/routes/productRouter');
 const loginRouter = require('./src/routes/loginRouter');


const server = express();
dotenv.config();
server.use(cors({
    origin: "http://localhost:5173", // cambia si usas otro puerto
  credentials: true
}));
server.use(express.json());
server.use(morgan('dev'));

//routes
 server.use('/productos', productRouter);
 server.use('/', loginRouter);
 server.use('/', loginRouter);



server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});