import {Router} from "express";
import objectContenedor from "../contenedor/object.js";

const router = Router();

const objectService = new objectContenedor;

router.get('/', (req,res)=>{
    res.render('welcome.pug', {
        message:"Bienvenido Carlos"
    })
})

router.get('/newObject',(req,res)=>{
    res.render('newObject.pug')
})

router.get('/object',async(req,res)=>{
    let object = await objectService.getAll();
    res.render('object',{
        object,
        title: "Productos añadidos!!"
    });
})

export default router;