const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MahasiswaSchema = new Schema({
  npm: {
    type: String
  },
  Password: {
    type: String
  },
  Nama: {
    type: String
  },
  Prodi: {
    type: String
  }
})

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema)