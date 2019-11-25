const matakuliah = require('express')()
const matkulController = require('../controller/matkul')

matakuliah.post('/insert', (req, res) => {
  matkulController.insertmatakuliah(req.body)
  .then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})

module.exports = matakuliah