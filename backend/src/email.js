const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth:{
        user: "arturcavalcante2014.p@hotmail.com",
        pass: "yArturC6"
    },
    tls: { rejectUnauthorized: false }
});

const mailOptions = {
    from: 'arturcavalcante2014.p@hotmail.com',
    to: 'arturcavalcante2014.pp@gmail.com',
    subject: 'Email de Teste',
    text: 'Isto é apenas teste.'
};

function enviar(){
    transporter.sendMail(mailOptions, (err, info) => {
        if (err){
            console.log(err);
        }else{
            console.log('Email enviado: ' + info.response);
        };
    });
};

enviar();

module.exports = enviar ;