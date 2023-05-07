E_Commerce_MERN
Este es un proyecto de comercio electrónico creado con la arquitectura MERN (MongoDB, Express.js, React.js y Node.js). Permite a los usuarios registrarse, iniciar sesión, agregar productos al carrito, procesar pagos mediante la integración con Stripe y realizar pedidos.

Este proyecto utiliza el lenguaje de programación JavaScript y las siguientes tecnologías:

MongoDB: para almacenar y gestionar datos de la aplicación.
Express.js: para crear el backend y manejar las rutas y peticiones HTTP.
React.js: para construir la interfaz de usuario del frontend.
Node.js: para ejecutar el servidor y el backend de la aplicación.

Instalación
¿Qué lenguajes y tecnologías se utilizan en este proyecto?
Para ejecutar el proyecto localmente, sigue los siguientes pasos:

Clona el repositorio en tu máquina local utilizando el comando git clone [URL del repositorio].
Abre la terminal en la carpeta raíz del proyecto y ejecuta el comando npm install para instalar todas las dependencias necesarias.
Asegúrate de tener MongoDB instalado y ejecutando en tu máquina local.
Crea un archivo .env en la carpeta raíz del proyecto y agrega la configuración de tu base de datos MongoDB y las claves de API de Stripe. Por ejemplo:

MONGODB_URI=mongodb://localhost:27017/e-commerce
STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
STRIPE_PUBLIC_KEY=tu_clave_publica_de_stripe
PASS_SEC= ReactEcommerce
JWT_SEC= ReactFiverr

Ejecuta el comando npm start para iniciar la aplicación en modo de desarrollo.
Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.

Este proyecto utiliza las siguientes tecnologías:

Registro e inicio de sesión de usuarios
Autenticación de usuarios con contraseñas cifradas utilizando bcrypt.
Autorización de usuarios mediante tokens de acceso generados con jsonwebtoken.
Integración de pagos en línea mediante la API de Stripe y las librerías @stripe/react-stripe-js y @stripe/stripe-js.
Administración de carritos de compra utilizando la librería @tanstack/react-query.
Historial de pedidos para los usuarios
Lista de productos y detalles de producto
Consumo de datos de productos y pedidos almacenados en una base de datos MongoDB con la ayuda de mongoose.
Carrito de compras
Configuración de un servidor Express con el middleware cors, cookie-parser y morgan.
Implementación de una interfaz de usuario responsive y accesible utilizando react, react-dom y react-router-dom.
Estilización de la interfaz con la ayuda de sass.
Configuración de un entorno de desarrollo con nodemon, eslint, eslint-plugin-react y vite.

MongoDB
Express.js
React.js
Node.js
Stripe
Axios
Sass
React Router DOM
@tanstack/react-query
Infinite React Carousel
Moment
Bcrypt
Cookie-parser
Cors
Jsonwebtoken
Mongoose
Morgan
