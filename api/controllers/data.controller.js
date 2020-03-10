const {Estados} = require('../models'); // Sequelize
const {Municipios} = require('../models'); // Sequelize
const {Bancos} = require('../models'); // Sequelize
const {Censos} = require('../models'); // Sequelize
const {Denues} = require('../models'); // Sequelize
const MODULE_NAME = '[data Controller]';

function getEstados(req, res) {
    try {
        console.log("Estados...");
        console.log(Estados);
        Estados.findAll({})
            .then((estados) => {
                console.log(estados);
                res.status(200).send(estados);
            }, (error) => {
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getEstados.name, error, res);
    }
}

function getMunicipios(req, res) {
    try {
        var params = {
            entidad: req.swagger.params.entidad.value
        };
        console.log("municipios..." + params);
        console.log(Municipios);
        Municipios.findAll(
            {
                where: {
                    idestado: params.entidad
                }
            })
            .then((municipios) => {
                console.log(municipios);
                res.status(200).send(municipios);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
    }
}

function getBancos(req, res) {
    try {
        console.log("Bancos...");
        console.log(Bancos);
        Bancos.findAll(
            {})
            .then((bancos) => {
                console.log(bancos);
                res.status(200).send(bancos);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getBancos.name, error, res);
    }
}

function getCensosByMun(req, res) {
    try {
        var params = {
            entidad: req.swagger.params.entidad.value,
            municipio: req.swagger.params.municipio.value
        };
        console.log("censos..." + params);
        console.log(Censos);
        Censos.findAll({
                where: {
                    idestado: params.entidad,
                    idmunicipio: params.municipio,
                }
            }
        )
            .then((censos) => {
                res.status(200).send(censos);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getCensosByMun.name, error, res);
    }
}

function getCensosByEdo(req, res) {
    try {
        var params = {
            entidad: req.swagger.params.entidad.value
        };
        console.log("censos..." + params);
        console.log(Censos);
        Censos.findAll({
                where: {
                    idestado: params.entidad,
                    actividad: 'Total municipal'
                }
            }
        )
            .then((censos) => {
                res.status(200).send(censos);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getCensosByEdo.name, error, res);
    }
}

function getDenues(req, res) {
    try {
        var params = {
            entidad: req.swagger.params.entidad.value,
            municipio: req.swagger.params.municipio.value,
            tipo: req.swagger.params.tipo.value
        };
        console.log("Denues..." + params);
        console.log(Denues);
        Denues.findAll({
                where: {
                    idestado: params.entidad,
                    idmunicipio: params.municipio,
                    tipo: params.tipo
                }
            }
        )
            .then((denues) => {
                res.status(200).send(denues);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getDenues.name, error, res);
    }
}

module.exports = {
    getMunicipios,
    getEstados,
    getBancos,
    getCensosByMun,
    getCensosByEdo,
    getDenues,
    MODULE_NAME
}