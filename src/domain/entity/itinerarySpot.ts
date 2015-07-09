/**
 * Describes one spot of the Itinerary of a given line
 * @class Itinerary
 * @constructor
 */
class ItinerarySpot{

    public constructor(private latitude: number, private longitude: number, private returning: boolean) {}
	
	public isReturning(): boolean{
		return this.returning;
	}
	
	public getLatitude(): number{
		return this.latitude;
	}
	
	public getLongitude(): number{
		return this.longitude;
	}
}
export = ItinerarySpot;