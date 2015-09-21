class ItineraryHeader {
	
	public constructor(private line: string, private description: string, private keyword: string) {}
	
	public getLine(): string {
		return this.line;
	}
	
	public getDescription(): string {
		return this.description;
	}
	
	public getKeyword() : string{
		return this.keyword;
	}
}
export = ItineraryHeader;