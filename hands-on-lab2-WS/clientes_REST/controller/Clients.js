const Client = require('../model/Client')

const createClient = (req, res) => {
    let client = new Client({
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        subTotal: req.body.subTotal
    })

    client.save((err, cli) => {
        err && res.status(500).json(err.message)
        res.status(200).json(cli)
    })
}

const getClients = (req,res) => {
    Client.find((err, clients) => {
        err && res.status(500).send(err.message)
        res.status(200).json(clients)
    })
}

const updateSubTotal = (req, res) => {
    Client.findOneAndUpdate({name: req.body.name},{subTotal: req.body.subTotal}, (err, cli)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(cli)
    })
}

const deleteClient = (req, res) => {
    Client.findOneAndDelete({name: req.body.name}, (err , cli) => {
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}


module.exports = {createClient, getClients, updateSubTotal, deleteClient}