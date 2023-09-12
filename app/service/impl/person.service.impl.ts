import { injectable } from 'inversify';
import { PersonService } from '../person.service';
import Headers from '../../interface/headers.interface';

@injectable()
export default class PersonServiceImpl implements PersonService {
	// eslint-disable-next-line class-methods-use-this
	public async init(verifyRequest: any, headers: Headers): Promise<any> {
		console.log(verifyRequest, headers);
		return { data: 'service work' };
	}
}
