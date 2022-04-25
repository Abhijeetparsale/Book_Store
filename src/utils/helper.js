import nodemailer from "nodemailer";
import logger, { logStream } from '../config/logger';

export const sendMail = async (email, token) => {
    const transporter = nodemailer.createTransport({


        service: "gmail",
        auth: {
            user: process.env.SENDERS_ID,
            pass: process.env.PASSWORD
        }

    })
    console.log(process.env.SENDERS_ID)
    console.log(process.env.PASSWORD)



    // const mailOption = {
    //     from: process.env.SENDERS_ID,
    //     to: email,
    //     subject: "Password Reset Link ",
    //     html: `<h1>Link:><a href="http://localhost:4000/resetPassword/${token}">click here</a></h1>`
    // }
    // return new Promise((resolve, reject) => {
    //     transport.sendMail(mailOption, (err, info) => {
    //         if (info) {
    //             logger.log('info', info);
    //             return resolve('Reset link sent successfully');
    //         } else {
    //             logger.log('error', err);
    //             return reject('Error in sending Link');
    //         }

    //     });
    // })
    let info = await transporter.sendMail({
        from: process.env.SENDERS_ID, // sender address
        to: email, // list of receivers
        subject: "Password Reset Link", // Subject line
        text: "Test", // plain text body
        html: `<h1>Link:><a href="http://localhost:4000/resetPassword/${token}">click here</a></h1>`, // html body
    });
}