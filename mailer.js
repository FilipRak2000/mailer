import { info } from 'console';
import nodemailer from 'nodemailer'
export async function SendMessage(email) {

    const testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth:{
            user: testAccount.user,
            pass:  testAccount.pass,
        },
    })

   const info =  await transporter.sendMail({
        from: "Random Company <filiprak@interia.pl>",
        to: email,
        subject: "THX FOR DATA",
        text: "now u are our slave or something like that huehue",
        html: "now u are our <h1>slave</h1> or something like that huehue",
    });


   console.log("Message has been sent to:", email)
   console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));

}
