const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { ObjectId } = require('mongodb');
dotenv.config()
const { MongoClient, Collection } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')

const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const dbName = 'PassOP';
const port = 3000
app.use(bodyparser.json())
app.use(cors())

async function startServer() {
  try {
    await client.connect()
    console.log("MongoDB connected")

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  } catch (error) {
    console.error("MongoDB connection failed:", error)
  }
}

startServer()
//Get all the passwords
app.get('/', async (req, res) => {
  const db = client.db(dbName)
  const collection = db.collection('passwords')
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

//Save a password
app.post('/', async (req, res) => {
  try {
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')

    const result = await collection.insertOne(password)

    res.send({ success: true, result })
  } catch (err) {
    console.error(err)
    res.status(500).send({ success: false, error: err.message })
  }
})

//Delete a Password
app.delete('/', async (req, res) => {
  const { id } = req.body

  console.log("ID received:", id)
  console.log("Type of ID:", typeof id)

  const db = client.db(dbName)
  const collection = db.collection('passwords')

  const result = await collection.deleteOne({ _id: new ObjectId(id) })

  console.log("Deleted count:", result.deletedCount)

  res.send({ success: true, result })
})

