const express = require('express');
const app = express();
app.use(express.json());

//importar el router de Libros
const librosRouter = require('./routes/libros');
//importamos el middleware de Error Handler
const errorHandler = require('./middlewares/errorHandler');


app.use('/libros', librosRouter);

app.use(errorHandler);
app.listen(3000, ()=>{
    console.log('Servidor iniciado en el puerto 3000')
});