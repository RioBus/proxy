class BusStopSpot{
	
	public constructor(private latitude: number, private longitude: number, private sequential: number){}
	
	public getLatitude(): number{
		return this.latitude;
	}
	
	public getLongitude(): number{
		return this.longitude;
	}
	
	public getSequential(): number{
		return this.sequential;
	}
}

export = BusStopSpot;