/// <reference path="../defs/tsd.d.ts" />
class Config {

	public static log: any = {
		runtime: "./runtime.log",
		server: "./server.log"
	}
	
	public static errorMailMessage: any = {
		from: "No-reply <your@provider.com>",
		to: "",
		subject: "[ERROR] Server down!",
		text: "An error ocurred in the server\n\n$$\n\nand it shut down."
	}

	public static environment: any = {
		mailServer: {
			user: "",
			password: "",
			host: "smtp.gmail.com",
			ssl: true
		},
		development: {
			ip: "127.0.0.1",
			port: "8080"
		},
		production: {
			ip: "0.0.0.0",
			port: "80"
		}
	}

	public static isProduction(): Boolean {
		return process.argv.indexOf("--production") > -1;
	}

	public static resources: Object = {
		"resources/main": "/"
	}
}

export = Config;