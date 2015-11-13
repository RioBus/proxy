'use strict';
const Spot = require('./spot');
const Moment = require('moment-timezone');
/**
 * Describes a bus instance
 * @class {Bus}
 */
class Bus extends Spot {
	
	constructor(line, order, speed, direction, latitude, longitude, timestamp, sense, id) {
		super(latitude, longitude);
		this.line = (!line || line==='')? 'indefinido' : line.toString();
		this.order = order.toString();
		this.speed = speed || 0;
		this.direction = direction || 0;
		timestamp = (new Date(timestamp)).toISOString();
		this.timestamp = Moment.tz(timestamp, "America/Sao_Paulo").format();
		this.sense =  (!sense || sense==='')? 'desconhecido' : sense;
		if(id) this._id = id;
    }
}
module.exports = Bus;