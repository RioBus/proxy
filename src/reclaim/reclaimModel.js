'use strict';

/**
 * Describes a reclaim instance
 * @class {Reclaim}
 */
class Reclaim {
	
	constructor(title, line, date, text) {
		this.title = (!title)? '' : title.toString();
		this.line = line.toString();
		this.date = new Date(date.toISOString());
		this.text = text.toString();
    }
}
module.exports = Reclaim;