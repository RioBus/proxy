class ItineraryHeader {
	
	public constructor(private line: string, private description: string) {}
	
	public getLine(): string {
		return this.line;
	}
	
	public getDescription(): string {
		return this.description;
	}
}
export = ItineraryHeader;