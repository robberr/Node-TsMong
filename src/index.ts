import Server from './server/server';
import database from './database';
database();
const server=new Server();
server.start();
