/// <reference path="../../../defs/node/node.d.ts" />
import Config 	  = require("../../config");
import MailObject = require("./mailObject");

class MailServer{
	
	private driver: any;
	
	public constructor(){
		this.driver = require("emailjs/email").server.connect(Config.environment.mailServer);
	}
	
	public sendMail(mail: MailObject, callback: (error: any, message: any)=>void): void{
		this.driver.send(mail, callback);
	}
}
export = MailServer;