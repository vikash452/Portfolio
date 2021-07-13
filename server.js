const bodyParser = require('body-parser')
const express=require('express')
const app=express()
const PORT=process.env.PORT || 5000
const nodemailer=require("nodemailer")
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/html/index.html')
})

app.post('/sendQuery',(req,res)=>{
  console.log(req.body)
    var message=req.body.message;
    var senderEmail=req.body.senderEmail;
    var name=req.body.name;

    //SENDING THE MAIL TO VIKASHP0901@GMAIL.COM
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GMAIL_ID,
          pass: process.env.GMAIL_PASSWORD,
        },
    });

    var mailOptions = {
        from: process.env.GMAIL_ID,
        to: 'vikashp0901@gmail.com',
        subject: "User Query on Vikash portfolio",
        html: `
        Name of the sender : ${name}
        <br/>
        Email of the sender : ${senderEmail}
        <br/>
        Message : ${message}
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          return res.json({success:false,message:error})
        } else {
          console.log("Email sent: " + info.response);
        return res.json({success:true,message:"message sent"})
        }
    });

})

app.listen(PORT,()=>{
    console.log('Server started on port 5000')
})