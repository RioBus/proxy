class Config{
	
	public static log:any = {
		runtime: "./runtime.log",
		server: "./server.log"
	}
	
	public static environment:any = {
		development: {
			ip: "127.0.0.1",
			port: "8080"
		},
		production: {
			ip: "0.0.0.0",
			port: "80"
		}
	}
	
	public static isProduction(): Boolean{
		return process.argv.indexOf("--production")>-1;
	}

	public static resources: Object = {
		"resources/main": "/"
	}
}

export = Config;