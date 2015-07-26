class LegacyItinerary {

    public constructor(
		private sequential: number, private line: string,
		private description: string, private agency: string,
		private shape: number, private latitude: number,
		private longitude: number) {}
	
	public getSequential(): number{
		return this.sequential;
	}
	
	public getLine(): string{
		return this.line;
	}
	
	public getDescription(): string{
		return this.description;
	}
	
	public getAgency(): string{
		return this.agency;
	}
	
	public getShape(): number{
		return this.shape;
	}
	
	public getLatitude(): number{
		return this.latitude;
	}
	
	public getLongitude(): number{
		return this.longitude;
	}
}
export = LegacyItinerary;