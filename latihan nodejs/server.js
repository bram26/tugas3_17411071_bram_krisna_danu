const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000

const mongoURI = 'mongodb://localhost:27017/dblatihan'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect to db succes')
}).catch(err =>{
    console.log('Error : '+ err)
})

server.use(bodyParser.json({
    extended: true,
    limit:'50mb'
}))

server.use(bodyParser.urlencoded({
    extended: true,
    limit:'50mb'
}))

//list router

server.use('/Mahasiswa', require('./routes/Mahasiswa'))

server.use('/matakuliah', require('./routes/matakuliah'))


server.listen(port, function() {
    console.log('Server started on port'+port)
})

