import 'reflect-metadata';
import { Router } from 'express';
import { injectable } from 'inversify';
import PersonController from '../controller/person.controller';
import TYPES from '../types';
import personContainerInstance from '../container/personContainerInstance';

@injectable()
export default class PersonRouter {
	private router: Router = Router();

	private control: PersonController;

	constructor() {
		this.config();
	}

	config(): void {
		this.control = personContainerInstance.get<PersonController>(TYPES.PersonController);

		this.router.get('/auth/permissions', this.control.create.bind(this.control));
	}
}
