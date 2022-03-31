const mongoose = require('mongoose')

const mongoURI =
    process.env.NODE_ENV === 'production' ?
    process.env.DB_URL :
    "mongodb+srv://nh9686ay:Hitman95@cluster0.0pdjw.mongodb.net/LAB329?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
    .then(instance => console.log(`Connected to : ${instance.connections[0].name}`))
    .catch(error => console.log(`failed conn:`, error))

module.exports = mongoose