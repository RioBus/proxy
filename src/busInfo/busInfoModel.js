'use strict';

/**
 * Describes a bus info instance
 * @class {BusInfo}
 */
class BusInfo {
	
	constructor(sign, fabrication, fuel, plant, model, body, frame, frameNumber, order, features, inclusionDate) {
		this.sign = (!sign || sign==='')? 'indefinido' : sign.toString();
		this.fabrication = parseInt(fabrication);
		this.fuel = fuel.toString();
		this.plant = parseInt(plant);
		this.model = model.toString();
		this.body = body.toString();
		this.frame = frame.toString();
		this.frameNumber = frameNumber.toString();
		this.order = (!order || order === '')? 'indefinido' : order.toString();
		this.features = features.toString();
		this.inclusionDate = inclusionDate.toISOString();
    }
}
module.exports = BusInfo;