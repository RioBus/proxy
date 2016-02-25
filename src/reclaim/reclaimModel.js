'use strict';

/**
 * Describes a reclaim instance
 * @class {Reclaim}
 */
class Reclaim {
	
	constructor(title, line, date, text) {
		this.title = (!title || title==='')? '' : title.toString();
		this.line = line.toString();
		this.date = (!date|| date ==='')? '0/00/0000' :date.toString();
		this.text = text.toString();
    }
}
module.exports = Reclaim;