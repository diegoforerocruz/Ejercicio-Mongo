const conn = require("../lib/MongoUtils")
const ObjectID = require("mongodb").ObjectID

const getMensajes= (callback) => 
conn.then(client => {
    client.db("messagesdb").collection("messages").find().toArray((err, data) => {
        console.log(data)
        callback(data)
    })
})

const getMensaje= (pid, callback) => 
conn.then(client => {
    client.db("messagesdb").collection("messages").findOne({_id:pid}).then((result) => {
        
        callback(result)
    })
})

const addMensajes= (mssg) => 
conn.then(client => {
    client.db("messagesdb").collection("messages").insertOne(mssg).then((data) => {
        console.log(data)
    })
})

const deleteMensajes= (pid) => 
conn.then(client => {
    client.db("messagesdb").collection("messages").deleteOne({_id: new ObjectID(pid)}).then((data) => {
        console.log(data)
    })
})

const mensaje = {getMensajes, getMensaje, addMensajes, deleteMensajes}

module.exports = mensaje