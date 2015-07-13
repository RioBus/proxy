/**
 * Describes a bus instance
 * @class Bus
 * @constructor
 */
class Bus{
	
	private timestamp: string;

    public constructor(private line: string, private order: string, private speed: number, 
				private direction: number, private latitude: number, 
				private longitude: number, timestamp: string, private sense?: string, private _id?: number){
		this.timestamp = (new Date(timestamp)).toISOString();
    }
	
	public getId(): number {
		return this._id;
	}
	
	public getLine(): string{
		return this.line;
	}
	
	public setLine(line: string): void{
		this.line = line;
	}
	
	public getOrder(): string{
		return this.order;
	}
	
	public getSpeed(): number{
		return this.speed;
	}
	
	public getSense(): string{
		return this.sense;
	}
	
	public setSense(sense: string): void{
		this.sense = sense;
	}
	
	public getDirection(): number{
		return this.direction;
	}
	
	public getLatitude(): number{
		return this.latitude;
	}
	
	public getLongitude(): number{
		return this.longitude;
	}
	
	public getUpdateTime(): Date{
		return (new Date(this.timestamp));
	}
}
export = Bus;