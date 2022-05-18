// Server setup
const express = require('express')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))







const port = 3031
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})