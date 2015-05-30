/// <reference path="../defs/tsd.d.ts" />
import Application = require("./app");

require("sync")(()=>{
	try{
		Application.main(process.argv);
	} catch(e){
		console.log(e);
	}
});