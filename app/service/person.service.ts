import Headers from '../interface/headers.interface';

export interface PersonService {
	init(request: any, headers: Headers): Promise<any>;
}
