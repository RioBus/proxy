/// <reference path="../defs/tsd.d.ts" />
global.Config = require("./config");

try{
	require("./app").main(process.argv);
} catch(e){
	console.log(e.stack);
}