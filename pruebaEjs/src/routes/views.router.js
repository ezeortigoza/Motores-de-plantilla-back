import {Router} from "express";
import objectContenedor from "../contenedor/object.js";

const router = Router();
const objectService = new objectContenedor();
router.get('/',(req,res)=>{
    res.render('home',{
        title: "Bienvenido Carlos"
    })
})

router.get('/newObject', (req,res)=>{
    res.render('newObject',{
        products: "Hola Carlos crea tus productos!"
    });
})

router.get('/object',async(req,res)=>{
    let object = await objectService.getAll();
    res.render('object',{
        object,
    });
})

export default router;