import express from 'express'
import path from 'path'
import { SendMessage } from './mailer.js'


const __dirname = path.resolve()
const app = express()
app.use(express.urlencoded({extended:true}))

const emails = []

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html")
});


app.post("/", async (req, res)=>{
    const {email} = req.body
    emails.push(email)
    console.log(emails)
    await SendMessage(email)
    res.sendFile(__dirname + "/views/thanks.html")
})


app.listen(3000)