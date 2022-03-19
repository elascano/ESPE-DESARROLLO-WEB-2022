const ClientController = require('../controller/Clients')
const express = require('express')
const router = express.Router()

//router.metodo_CRUD('uri', controlador.metodo)
router.post('/add',ClientController.createClient)
router.get('/clients', ClientController.getClients)
router.put('/updateClient',ClientController.updateSubTotal)
router.delete('/deleteClient', ClientController.deleteClient)

module.exports = router