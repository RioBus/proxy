/// <reference path="../defs/express/express.d.ts" />
var Express = require("express");

class Application{
	
	static main(argv: string[]){
		var server = Express();
		server.get("/test", function(req, res, next){
			console.log("Acessei aqui");
			res.jsonp({greeting: "hello world"});
		});
		
        server.listen(8081, "127.0.0.1", function(){
            "use strict";
            console.log('Server started in http://127.0.0.1:8081');
        });
	}
}

export = Application;