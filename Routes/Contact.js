const express = require('express')
const { addContact, getAllContact, getOneContact, deleteContact, updateContact } = require('../Controllers/Contact')

const contactRouter = express.Router()

contactRouter.post('/addContact', addContact)

contactRouter.get('/getAllContacts', getAllContact)

contactRouter.get('/getOneContact/:id', getOneContact)

contactRouter.delete('/deleteContact/:id', deleteContact)

contactRouter.put('/updateContact/:id', updateContact)

module.exports = contactRouter