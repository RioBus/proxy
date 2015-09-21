import ItinerarySpot = require("./itinerarySpot");

class Itinerary {
	
	public constructor(private line: string, private description: string, 
		private agency: string, private keywords: string, private spots: ItinerarySpot[]) {}
	
	public getLine(): string {
		return this.line;
	}
	
	public getDescription(): string {
		return this.description;
	}
	
	public getAgency(): string{
		return this.agency;
	}
	
	public getKeywords(): string {
		return this.keywords;
	}
	
	public getSpots(): ItinerarySpot[] {
		return this.spots;
	}
}
export = Itinerary;