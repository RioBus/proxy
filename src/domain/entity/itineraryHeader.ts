class ItineraryHeader {
	
	public constructor(private line: string, private description: string, private keywords: string) {}
	
	public getLine(): string {
		return this.line;
	}
	
	public getDescription(): string {
		return this.description;
	}
	
	public getKeywords() : string{
		return this.keywords;
	}
}
export = ItineraryHeader;