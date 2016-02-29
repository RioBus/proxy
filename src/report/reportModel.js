'use strict';

/**
 * Describes a report instance
 * @class {Report}
 */
class Report {
	
	constructor(title, line, date, text) {
		this.title = (!title)? '' : title.toString();
		this.line = line.toString();
		this.date = new Date(date.toISOString());
		this.text = text.toString();
    }
}
module.exports = Report;