/// <reference path="../defs/tsd.d.ts" />
class Config {
	
	public static rootPath: string = __dirname;

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
	
	public static maxSearchItems = 10;

	public static resources: Object = {
		"resources/all"				: "/search",
		"resources/dataProviderLog" : "/log/dataprovider/:lines",
		"resources/intervalReports" : "/reports/:minDate/:maxDate",
		"resources/itinerary"		: "/itinerary/:line",
		"resources/lastUpdate"		: "/lastupdate",
		"resources/runtimeLog"		: "/log/runtime/:lines",
		"resources/search"			: "/search/:platformId/:data",
		"resources/serverLog"		: "/log/server/:lines",
	}
	
	public static analytics: any = {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    };
}

export = Config;