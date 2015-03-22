export class Itinerary{

    constructor(sequential, line, description, agency, shape, latitude, longitude){
        "use strict";
        this.sequential = sequential;
        this.line = line;
        this.description = description;
        this.agency = agency;
        this.shape = shape;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}