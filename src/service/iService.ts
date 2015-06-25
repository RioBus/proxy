interface IService {
	remove(...args: Object[]): 		 any;
	retrieve(...args: Object[]): 	 any;
	retrieveList(...args: Object[]): any;
	save(...args: Object[]): 		 any;
	update(...args: Object[]): 		 any;
}
export = IService;