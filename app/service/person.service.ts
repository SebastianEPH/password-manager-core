import { Headers } from '../interface';

export interface PersonService {
	init(request: any, headers: Headers): Promise<any>;
}
