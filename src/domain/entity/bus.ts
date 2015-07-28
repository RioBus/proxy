/**
 * Describes a bus instance
 * @class Bus
 * @constructor
 */
class Bus{
	
	private timeStamp: string;

    public constructor(private line: string, private order: string, private speed: number, 
				private direction: number, private latitude: number, 
				private longitude: number, timeStamp: string, private sense?: string){
		this.timeStamp = (new Date(timeStamp)).toISOString();
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
		return (new Date(this.timeStamp));
	}
}
export = Bus;