const mongoose = require ('mongoose')
const conn = require('../../config/mongo')

conn()

const livroSchema = mongoose.Schema({
    id: Number,
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String,
},
{
    timestamps: true
})

const livroModel = mongoose.model('livros', livroSchema)

module.exports = livroModel