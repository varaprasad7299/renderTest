const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/upload', (req, res) => {
    res.send("uploaded")
    fs.writeFile("./files/file.txt","hello world",(err)=>{
        if(err){
            console.log(err)
        }
    })
    
    
})

app.get('/delete', (req, res) => {
    res.send("delete")
    fs.unlink("./files/file.txt", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File deleted successfully');
    });
})

app.get('/read', (req, res) => {
    fs.readFile('./files/file.txt.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data); // Print the contents of the file
        res.send(data)
    });
})

app.listen(port, () => {
    console.log("Server is running")
})
