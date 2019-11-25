const Mahasiswa = require('express')()
const mhsController = require('../controller/mhs')

Mahasiswa.post('/insert', (req, res) => {
  mhsController.insertMahasiswa(req.body)
  .then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})

module.exports = Mahasiswa