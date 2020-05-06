const nodemailer = require('nodemailer');

async function send(request, response) {

    const userTransporter = 'arturcavalcante2014.pp@gmail.com';
    const passTransporter = '*****';

    const userReceiver = 'arturcavalcante2014.p@hotmail.com';

    const { Name, Email, PhoneNumber, Subject, Text } = request.body;

    const TextToReceiver = `Olá, o email que foi passado para nós ${userTransporter}, foi de ${Name}, com e-mail ${Email} e número de telefone ${PhoneNumber}, falando o assunto ${Subject}, com o seguinte texto:\n ${Text}`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: userTransporter,
            pass: passTransporter
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: userTransporter,
        to: userReceiver,
        subject: 'Contato do Site ionecavalcanteengenharia.com ',
        text: TextToReceiver,
    };

    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            const resp = { error: err };
            return response.json(resp);
        } else {
            const resp = { inf: info };
            console.log('E-mail sended->', resp);
            return response.json(resp);
        };
    });
};

module.exports = { send };