import express from 'express';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'
import objectRouter from './routes/object.Router.js'
const app = express();

const server = app.listen(8080,()=>console.log('Listening on 8080'));


app.use(express.json());
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');
app.use('/',viewsRouter);
app.use('/api/object',objectRouter);
app.use(express.static(__dirname+'/public'));

