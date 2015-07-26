/// <reference path="../defs/tsd.d.ts" />
class Config {
	
	public static rootPath: string = __dirname;

	public static log: any = {
		dataProvider: "/tmp/riobus/data-provider.log",
		runtime: 	  "/tmp/riobus/runtime.log",
		server: 	  "/tmp/riobus/server.log"
	};
	
	public static errorMailMessage: any = {
		from: "No-reply <your@provider.com>",
		to: "",
		subject: "[ERROR] Server down!",
		text: "An error ocurred in the server\n\n$$\n\nand it shut down."
	};

	public static environment: any = {
		mailServer: {
			user: "",
			password: "",
			host: "smtp.gmail.com",
			ssl: true
		},
		development: {
			ip: "0.0.0.0",
			port: "8080",
			database: {
				driver: "mongodb",
				config: {
					dbName: "riobus",
					host: "mongo",
					user: "riobus",
					pass: "riobus",
					port: "27017"
				}
			}
		},
		production: {
			ip: "0.0.0.0",
			port: "80",
			database: {
				driver: "mongodb",
				config: {
					dbName: "riobus",
					host: "mongo",
					user: "riobus",
					pass: "riobus",
					port: "27017"
				}
			}
		}
	};

	public static isProduction(): Boolean {
		return process.argv.indexOf("--production") > -1;
	};
	
	public static maxSearchItems = 10;

	public static resources: Object = {
		"resources/v2/allResource"			   : "/v2/search",
		"resources/v2/dataProviderLogResource" : "/v2/log/dataprovider/:lines",
		"resources/v2/itineraryResource"	   : "/v2/itinerary/:line",
		"resources/v2/runtimeLogResource"	   : "/v2/log/runtime/:lines",
		"resources/v2/searchResource"	       : "/v2/search/:platformId/:data",
		"resources/v2/serverLogResource"	   : "/v2/log/server/:lines",
		
		"resources/v3/itineraryResource"	   : "/v3/itinerary/:line",
		"resources/v3/searchResource"		   : "/v3/search/:data"
	};
	
	public static resourceRedirect: Object = {
		"/search": 					 "/v2",
		"/itinerary/:line" : 		 "/v2",
		"/log/dataprovider/:lines":  "/v2",
		"/log/runtime/:lines": 		 "/v2",
		"/log/server/:lines": 		 "/v2",
		"/search/:platformId/:data": "/v2"
	};
	
	public static analytics: any = {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    };
}

export = Config;