const express = require('express')
const app = express()
const port = 3000

app.get('/tugas1', (req, res) => res.send(`Hello, World`))

app.listen(port, () => console.log(`Hello World app akan muncul pada localhost:${port}/tugas1!`))