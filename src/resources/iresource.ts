interface IResource{
	route:string;
	get(request:any, response:any, next:any): void;
	post(request:any, response:any, next:any): void;
	put(request:any, response:any, next:any): void;
	delete(request:any, response:any, next:any): void;
}
export = IResource;