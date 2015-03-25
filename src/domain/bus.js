/**
 * Describes a bus instance
 * @class Bus
 * @constructor
 */
export class Bus{

    constructor(line, order, speed, direction, latitude, longitude, timestamp){
        "use strict";
        this.line = line;
        this.order = order;
        this.speed = speed;
        this.direction = direction;
        this.latitude = latitude;
        this.longitude = longitude;
        this.timeStamp = timestamp;
    }
}