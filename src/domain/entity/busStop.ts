import BusStopSpot = require("./busStopSpot");

class BusStop{
	
	public constructor(private line: string, private description: string, private agency: string, private spots: BusStopSpot[]){}
	
	public getLine(): string{
		return this.line;
	}
	
	public getDescription(): string{
		return this.description;
	}
	
	public getAgency(): string{
		return this.agency;
	}
	
	public getSpots(): BusStopSpot[]{
		return this.spots;
	}
	
}

export = BusStop;