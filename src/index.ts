declare var global, require, process;

global.Config = require("./config");
global.Strings = require("./strings");

try{
	require("./app").main(process.argv);
} catch(e){
	console.log(e.stack);
}