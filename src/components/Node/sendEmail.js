const nodemailer = require("nodemailer");

export const sendEmail = (data) => {
    const email = "webdev.sandeep.g@gmail.com";
    const password = "";

    const html = `
        <div>
            <div>
            <h1>Name:</h1>
                <p>${data?.name}</p>
            </div>
            <div>
                <h1>Contact:</h1>
                <p>${data?.phone}</p>
            </div>
            <div>
                <h1>Message:</h1>
                <p>${data?.message}</p>
            </div>
        </div>
    `;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.ethereal.email",
        port: 465,
        secure: true,
        auth: {
            user: email,
            pass: password,
        },
    });

    const main = async () => {

        // Setup email data
        let mailOptions = {
            from: data?.email,
            to: email,
            subject: "Hello",
            text: data?.message,
            html: html,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error occurred:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    }

    main().catch(console.error);
}