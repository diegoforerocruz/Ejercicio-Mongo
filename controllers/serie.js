const conn = require("../lib/MongoUtils")
const ObjectID = require("mongodb").ObjectID

const getSeries= (callback) => 
conn.then(client => {
    client.db("seriesdb").collection("series").find({id:4}).toArray((err, data) => {
        console.log(data)
        callback(data)
    })
})

const getSerie= (pid, callback) => 
conn.then(client => {
    client.db("seriesdb").collection("series").findOne({id:pid}).then((result) => {
        
        callback(result)
    })
})

const addSerie= (serie) => 
conn.then(client => {
    client.db("seriesdb").collection("series").insertOne(serie).then((data) => {
        console.log(data)
    })
})

const updateSerie= (pid) => 
conn.then(client => {
    client.db("seriesdb").collection("series").updateOne({_id: new ObjectID(pid)}, {$set: {name:"nombre cambiado"}}).then((data) => {
        console.log(data)
    })
})

const deleteSerie= (pid) => 
conn.then(client => {
    client.db("seriesdb").collection("series").deleteOne({_id: new ObjectID(pid)}).then((data) => {
        console.log(data)
    })
})

const serie = {getSeries, getSerie, addSerie, updateSerie, deleteSerie}

module.exports = serie