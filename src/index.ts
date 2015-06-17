/// <reference path="../defs/tsd.d.ts" />
import Application = require("./app");

try{
	Application.main(process.argv);
} catch(e){
	console.log(e);
}