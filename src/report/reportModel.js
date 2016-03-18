'use strict';
const Comment = require('./commentModel');
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
    
    addComment(comment) {
        if(comment instanceof Comment)
            this.comments.push(comment);
        else throw new Error('Parameter is not instance of Comment');
    }
    
    removeComment(comment) {
        if(comment instanceof Comment) {
            let comString = JSON.stringify(comment);
            for(let i=0; i<this.comments.length; i++) {
                let tmp = JSON.stringify(this.comments[i]);
                if(comString===tmp) this.comments.splice(i, 1);
            }
        }
        else throw new Error('Parameter is not instance of Comment');
    }
}
module.exports = Report;