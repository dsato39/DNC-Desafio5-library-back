const express = require('express')
const mongoose = require('mongoose')
const app = express()
const livroModel = require('./src/model/livro')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/livros', async (req, res) => {
  const livros = await livroModel.find({})
  return res.status(200).json(livros)
})

app.post('/livros/cadastro', async (req, res) => {
  const response = await livroModel.create({
    id: req.body.id,
    titulo: req.body.titulo,
    num_paginas: req.body.num_paginas,
    isbn: req.body.isbn,
    editora: req.body.editora
  })
  return res.status(200).json({
    data: response
  })
})

app.get('/livros/edicao/:id', async (req, res) => {
  const livro = await livroModel.findOne({ id: req.params.id})
  return res.status(200).json(livro)
})

app.put('/livros/edicao/:id', async (req, res) => {
  const livro = await livroModel.updateOne({ id: req.params.id }, req.body)
  return res.status(200).json(livro)
})

app.delete('/livros/:id', async (req, res) => {
  const livro = await livroModel.deleteOne({ id: req.params.id })
  return res.status(200).json(livro)
})

app.listen(8080, () => {
    console.log('Servidor operacional!')
})