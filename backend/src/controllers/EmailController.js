const nodemailer = require('nodemailer');

async function send(request, response, next){
    
    const userTransporter = 'arturcavalcante2014.p@hotmail.com';
    const passTransporter = 'yArturC6';

    const userReceiver = 'arturcavalcante2014.pp@gmail.com';

    const { Name, Email, Subject, Text } = request.body;

    const TextToReceiver = ` Olá, o email que foi passado para nós ${userTransporter}, foi de ${Name}, com e-mail ${Email}, falando o assunto ${Subject}, com o seguinte text: ${Text} Obrigado!`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth:{
            user: userTransporter,
            pass: passTransporter
        },
        tls: { rejectUnauthorized: false }
    });
    
    const mailOptions = {
        from: userTransporter,
        to: userReceiver,
        subject: 'Repassando E-mail',
        text: TextToReceiver,
    };
    try{
        await transporter.sendMail(mailOptions, (err, info) => {
            if (err){
                const resp = {error: err};
                return response.json(resp);
            }else{
                const resp = {inf: info};
                return response.json(resp);
            };
        });
    } catch(err){
        const error = new Error(err);
        console.log(error);
        error.httpStatusCode = 500;
        return next(erro);
    }
};

module.exports = { send };