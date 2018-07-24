# Ejemplo API REST con Node.js y Express

## Descripción

Este código muestra el funcionamiento de una API creada con Node.js y Express.

## Requisitos

* Instalar [Node.js](https://nodejs.org/es/)
* Nodemon (Al momento de instalar la API se instala automáticamente)
* Express (Al momento de instalar la API se instala automáticamente)

## Archivo `app.js`

Este archivo muestra el código para crear una API REST.

## Archivo `package.json`

Este archivo contiene detalle específico de las versiones de las dependencias que estan instaladas en el proyecto.

## Directorio `node_modules`

Directorio que se crea al momento de instalar la API. Contiene los paquetes y dependencias utilizadas en el proyecto.

## Instalación

* Para la instalación de la API, ejecuta el comando: 
```objc
	npm install 
```

## Ejecución

Para la ejecución de la API existen dos maneras, con el comando `node` y el comando `nodemon`. Si se realizan cambios en el script que se este desarrollando, con el comando `node` se tendrá que parar la API y volver a ejecutarla, con el comando `nodemon` se reiniciará automáticamente.

**Ejecución con node**

* Para la ejecución de la API con `node`, ejecuta el comando:
```objc
	node app.js 
```

**Ejecución con nodemon**

* Para la ejecución de la API con `nodemon`, ejecuta el comando:
```objc
	nodemon app.js 
```

* Para ver en funcionamiento la API. Desde un navegador ingresa a http://localhost:3000/ejemplo y se mostrará el mensaje que manda la API "Hola mundo".


