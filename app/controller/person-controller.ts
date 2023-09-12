import 'reflect-metadata';
import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { HTTP } from '../util/enum.util';
import TYPES from '../types';
import { PersonService } from '../service/person.service';
import { DatabaseRepository } from '../repository/database.repository';

@controller('/example')
export default class PersonController {
	constructor(
		@inject(TYPES.PersonService) private personService: PersonService,
		@inject(TYPES.Repository) private tokenRepository: DatabaseRepository,
	) {}

	@httpGet('/')
	public async index(req: Request, res: Response) {
		const resultService = await this.personService.init({}, {} as any);
		await this.tokenRepository.create({});
		console.log(req, resultService);
		res.status(HTTP.STATUS_CODE_200).json({ gaaaaaa: true, resultService });
	}
}
