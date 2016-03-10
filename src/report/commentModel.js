'use strict';

/**
 * Describes a comment instance
 * @class {Comment}
 */
class Comment {
	
	constructor(userId, userName, message, timestamp) {
        this.userId = userId;
        this.userName = userName;
        this.message = message;
        if(timestamp) {
            if(timestamp instanceof Date) this.timestamp = timestamp.toISOString();
            else this.timestamp = (new Date(timestamp)).toISOString();
        } else this.timestamp = (new Date()).toISOString();
    }
}
module.exports = Comment;