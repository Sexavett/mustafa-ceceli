const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())


app.use(express.static(path.join(__dirname, "/public")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'finish1.html'));
});


const PORT = process.env.PORT || 3002

app.listen(PORT,()=>{
    console.log("Run"+PORT)
})