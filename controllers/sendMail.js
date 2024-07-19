const nodemailer = require("nodemailer");


const sendMail= async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    //connect with smtp
let transporter = await nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'raquel.lesch96@ethereal.email',
        pass: 'VCGZk2jpbFB991tKFQ'
}});


//mailing
let info = await transporter.sendMail(
    {

    from: '"Debjit Kundu" <debjitkundu@gmail.com>', // sender address
    to: "debjitkundu11@gmail.com, debjitkundu1117@gmail.com", // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    }
)

  res.json(info);
  console.log(info.messageId)
}

module.exports=sendMail;