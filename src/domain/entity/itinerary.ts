import ItinerarySpot = require("./itinerarySpot");

class Itinerary {
	
	public constructor(private line: string, private description: string, 
		private agency: string, private spots: ItinerarySpot[], private _id?: number) {}
		
	public getId(): number {
		return this._id;
	}
	
	public getLine(): string {
		return this.line;
	}
	
	public getDescription(): string {
		return this.description;
	}
	
	public getAgency(): string{
		return this.agency;
	}
	
	public getSpots(): ItinerarySpot[] {
		return this.spots;
	}
}
export = Itinerary;