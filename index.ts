import Server from "./classes/server";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';


const server = new Server();
// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() )
// BodyParser

// CORS
server.app.use( cors({ origin: true, credentials: true }) );
// CORS




// Rutas de Servicios
server.app.use('/', router);
// Rutas de Servicios


server.start( ()=> {
    console.log(`El servidor corriendo en el puerto ${ server.port }`);
});