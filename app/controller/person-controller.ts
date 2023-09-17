import 'reflect-metadata';
import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { HTTP } from '../commons/enum';
import TYPES from '../types';
import { PersonService } from '../service/person.service';
import { DatabaseRepository } from '../repository/database.repository';
import { Log } from '../util';

@controller('/example')
export default class PersonController {
	constructor(
		@inject(TYPES.PersonService) private personService: PersonService,
		@inject(TYPES.Repository) private repository: DatabaseRepository,
		@inject(TYPES.Log) private log: Log,
	) {}

	@httpGet('/')
	public async index(req: Request, res: Response) {
		this.log.info('information', 'meeinfor', { tre: { tr: 'asdasd', dfsdf: 'dsa', asdasda: [] }, trueee333: true });
		this.log.trace('Trafeee ', 'me_trace', { tre: { tr: 'traaaa', dfsdf: 'traaa', traceeee: [] }, traceeee: true });

		const resultService = await this.personService.init({ noga: false }, { ga: true, dasdas: req.body } as any);
		await this.repository.create({});

		res.status(HTTP.STATUS_CODE_200).json({ gaaaaaa: true, resultService });
	}
}
