import ICollection   = require("../../core/database/iCollection");
import IModelMap 	 = require("../../core/database/iModelMap");
import Itinerary 	 = require("../entity/itinerary");
import ItinerarySpot = require("../entity/itinerarySpot");

class ItineraryModelMap implements IModelMap {
	
	preConfig(collection: ICollection<Itinerary>): void {
		collection.createIndex({line: 1});
	}
	
	public prepareToInput(data: any): any {
		if(data.line!==undefined) data.line = data.line.toString();
		if(data.description!==undefined) data.description = data.description.toString();
		if(data.agency!==undefined) data.agency = data.agency.toString();
		if(data.spots!==undefined && data.spots.length>0){
			for(var i=0; i<data.spots.length; i++){
				var spot = data.spots[i];
				spot.coordinates = (spot.latitude!==undefined && spot.longitude!==undefined)?
					[parseFloat(spot.latitude), parseFloat(spot.longitude)] : [];
				delete spot.latitude;
				delete spot.longitude;
				data.spots[i] = spot;
			}
		}
		return data;
	}
	
	public getInstance<T>(data: any): Itinerary {
		var spots: ItinerarySpot[] = new Array<ItinerarySpot>();
		if(data.spots.length>0){
			data.spots.forEach( (spot)=>{
				spots.push(new ItinerarySpot(spot.coordinates[0], spot.coordinates[1], spot.returning));
			});
		}
		return new Itinerary(data.line, data.description, data.agency, spots, data._id);
	}
}
export = ItineraryModelMap;