export interface DatabaseRepository {
	getAll(data: any): Promise<any>;
	create(data: any): Promise<any>;
	getOne(data: any): Promise<any>;
}
