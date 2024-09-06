const express = require('express')
const app = express()
const port = 5000
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
app.use(cors())

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})
app.get('/getuser', function (req, res) {
    connection.query('SELECT * FROM users',
        (err , result) => {
            if (err) throw new Error
            res.status(200).json(result)
        }
    )
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))