class Config{
	
	public static projectName:string = "Nodelicious";
	
	public static main:string = "index";
	
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
	
	public static resources:any = [
		"resources/main"
	]
}

export = Config;