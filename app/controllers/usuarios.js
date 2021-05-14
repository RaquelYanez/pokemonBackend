const {response} = require('express');

const usuariosGet =  (req, res ) =>{
    
    const {q, nombre, apikey} = req.query;
    res.json({msg: 'getApi-controler',q, nombre, apikey})
}
const usuariosPut =  (req, res = response) =>{

    const { id } = req.params
    res.json({msg: 'putApi-controler', id})
}
const usuariosPost =  (req, res = response) =>{
    //body de la req
    const {nombre, apellido} = req.body;
    res.json({msg: 'postApi-controler', nombre, apellido})
}
const usuariosDelete =  (req, res = response) =>{
    res.json({msg: 'deleteApi-controler'})
}
const usuariosPatch =  (req, res = response) =>{
    res.json({msg: 'patchApi-controler'})
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

}