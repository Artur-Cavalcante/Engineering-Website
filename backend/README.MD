## Server to handle with send e-mail from website.

<div >
   <img src="https://img.shields.io/badge/dynamic/json?color=yellow&label=Cors&prefix=v&query=dependencies.cors&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Fionecavalcante-engineering-server%2Fmaster%2Fpackage.json">
   
   <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=Express&prefix=v&query=dependencies.express&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Fionecavalcante-engineering-server%2Fmaster%2Fpackage.json">
   
   <img src="https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Nodemailer&prefix=v&query=dependencies.nodemailer&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Fionecavalcante-engineering-server%2Fmaster%2Fpackage.json">
</div>

---
### This server is hosped in Umber.com
### It receives contact data throught request HTTP from website, and re-send to a personal e-mail.  

#### Steps to use:

```bash
	$ git clone https://github.com/Artur-Cavalcante/ione-cavalcante-engineering-server
```

#### Attention:
> By secure the password has been is ocult, so, you shoud be alter transporter e-mail and password(you chooser), at file ./src/controllers/EmailController lines 5 and 6, according with which e-mail you will use, alter sender smtp server (e.g smtp.office365.com; e.g smtp.gmail.com), and ports 587(no secure), 465(secure SSL/TLS), in lines 15 and 16. After, alter receiver e-mail(you chooser).    

#### Docker Compose command:

```bash
	$ docker-compose up
```

#### Now, only to test, make a request to you host at port 3000 with body:
```JSON
	{
		"Name": "<you chooser>",
		"Email": "<you chooser>",
		"PhoneNumber": "<you chooser>",
		"Subject": "<you chooser>",
		"Text": "<you chooser>"
	}
```

> If your request is ok, it will return info with sender, destinatary, and other info, case wrong request, will return error's info. 

#### [Ione Cavalcante Engineering](https://ionecavalcanteengenharia.com.br)
