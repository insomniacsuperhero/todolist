const express = require('express');
const app = express();
let SERVER_PORT = process.env.PORT || 3300;

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/', express.static(__dirname+'/public'))



app.listen(SERVER_PORT, ()=>{
    console.log('Server listening on http://localhost:' + SERVER_PORT)
})