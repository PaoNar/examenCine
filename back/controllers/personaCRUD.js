const Persona = require('../models/persona');

const getData = (req, res) => {
    const { query } = req;
    Persona.findAll({ query })
    .then( response => {
        return res.status(200).json({
            ok: true,
            datos: response
        }) 
    })
    .catch( error => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${ error }` 
        })
    });
}

const postData = (req, res) => {
    const datos = req.body.datos

    Persona.create(datos)
    .then( response => {
        return res.status(200).json({
            ok: true,
            datos: response
        })
    })
    .catch( error => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${ error }` 
        })
    });
}

const putData = (req, res) => {
    const id = req.query.id
    const datos = req.body.datos
    Persona.update(datos, { where: { id }})
    .then( response => {
        return res.status(200).json({
            ok: true,
            datos: datos
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${ error }` 
        })
    })
}

const deleteData = (req, res) => {
    const { id } = req.query;
    
    Persona.destroy({ where: { id } })
    .then( response => {
        return res.status(200).json({
            ok: true,
            datos: "Eliminado"
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${ error }` 
            })
        })
    })
}

module.exports = {
    getData,
    postData,
    putData,
    deleteData,
}
