const express = require('express')
const Contact = require('../models/contactModel')
const router = express.Router()
const mongoose = require('mongoose')

router.post('/',async (req,res) => {
    const {firstName, lastName, email, message} = req.body
    try{
        const newContact = await Contact.create({firstName, lastName, email, message})
        res.status(200).json({success:'details added'})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router