import 'reflect-metadata';
import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { HTTP } from '../util/enum.util';
import { inject } from 'inversify';
import TYPES from '../types';
import { PersonService } from '../service/person.service';

@controller('/example')
export default class PersonController {
	constructor(@inject(TYPES.PersonService) private personService: PersonService) {}

	@httpGet('/')
	public async index(req: Request, res: Response) {
		const resultService = await this.personService.init({}, {} as any);

		console.log(req, resultService);
		res.status(HTTP.STATUS_CODE_200).json({ gaaaaaa: true, resultService });
	}
}
