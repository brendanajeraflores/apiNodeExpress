/*
	Archivo para ejecutar api rest
	Autor Brenda Najera Flores
*/

//Variables para exportar el módulo de express
var express = require('express');
var app = express();

//Agregar cabeceras para que la api pueda ser consultada desde una aplicación web
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//Definición de rutas para consultar la api
var formatRouter = express.Router()
app.use('/', formatRouter);

//Definición de la ruta donde se consultara la api y el mensaje que se mostrará
formatRouter.route('/ejemplo').get(function(req, res, next){
	//Manda el mensaje a mostrar
    res.send('Hola mundo');
});

//Indicar el puerto en el que funcionará la api
app.listen(3000, function(){
	//Se muestra en pantalla el mensaje del puerto en el que esta funcionando la pi
    console.log('Conectado a puerto 3000');
});