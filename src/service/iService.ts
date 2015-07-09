interface IService {
	create(...args: any[]): any;
	retrieve(...args: any[]): any;
	update(...args: any[]): any;
	delete(...args: any[]): any;
}
export = IService;