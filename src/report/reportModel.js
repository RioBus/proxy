'use strict';

/**
 * Describes a report instance
 * @class {Report}
 */
class Report {
	
	constructor(line, order, title, message, timestamp, resolvedTimestamp, comments, id) {
		this.line = line.toString();
		this.order = order.toString();
		this.title = (!title)? '' : title.toString();
		this.message = message.toString();
		this.timestamp = (timestamp)? new Date(timestamp.toISOString()) : new Date();
        this.resolvedTimestamp = resolvedTimestamp || null;
        this.comments = (comments)? comments : [];
        if(id) this._id = id;
    }
    
    isResolved() {
        return (this.resolvedTimestamp !== null) && (this.resolvedTimestamp instanceof Date);
    }
}
module.exports = Report;