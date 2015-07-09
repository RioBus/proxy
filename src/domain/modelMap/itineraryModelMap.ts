import IModelMap 	 = require("../../core/database/iModelMap");
import Itinerary 	 = require("../entity/itinerary");
import ItinerarySpot = require("../entity/itinerarySpot");

class ItineraryModelMap implements IModelMap {
	
	public getInstance<T>(data: any): Itinerary {
		var spots: Array<ItinerarySpot> = new Array<ItinerarySpot>();
		data.spots.forEach( (spot)=>{
			spots.push(new ItinerarySpot(spot.latitude, spot.longitude, spot.returning));
		});
		return new Itinerary(data.line, data.description, data.agency, spots, data._id);
	}
}
export = ItineraryModelMap;