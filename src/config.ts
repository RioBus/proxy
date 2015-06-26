/// <reference path="../defs/tsd.d.ts" />
class Config {
	
	public static rootPath: string = __dirname;

	public static log: any = {
		dataProvider: "/tmp/riobus/data-provider.log",
		runtime: 	  "/tmp/riobus/runtime.log",
		server: 	  "/tmp/riobus/server.log"
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
			port: "8080",
			database: {
				url: "http://riobus:riobus@arango:8529",
				databaseName: "riobus"
			}
		},
		production: {
			ip: "0.0.0.0",
			port: "80",
			database: {
				url: "http://riobus:riobus@arango:8529",
				databaseName: "riobus"
			}
		}
	}

	public static isProduction(): Boolean {
		return process.argv.indexOf("--production") > -1;
	}
	
	public static maxSearchItems = 10;

	public static resources: Object = {
		"resources/allResource"				: "/search",
		"resources/dataProviderLogResource" : "/log/dataprovider/:lines",
		"resources/intervalReportsResource" : "/reports/:minDate/:maxDate",
		"resources/itineraryResource"		: "/itinerary/:line",
		"resources/runtimeLogResource"		: "/log/runtime/:lines",
		"resources/searchResource"			: "/search/:platformId/:data",
		"resources/serverLogResource"		: "/log/server/:lines"
	}
	
	public static analytics: any = {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    };
}

export = Config;