import express from 'express'
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'
import objectRouter from './routes/object.router.js'


const app = express();

const server = app.listen(8080, ()=>console.log('listening on 8080 port'));

app.use(express.json());
app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs')
app.use('/',viewsRouter);
app.use('/api/object',objectRouter);
app.use(express.static(__dirname+'/public'));

/* let users = [];

app.get('/', (req,res)=>{
    res.render('home', {
        title: "Hola wei"
    })
})

app.get('/form', (req,res)=>{
    res.render('form',{
        users
    });
})

app.post('/productos', (req,res)=>{
    const user = req.body;
    users.push(user);
    res.redirect('/form');

}) */