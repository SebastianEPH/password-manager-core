import { Request, Response } from 'express';
import { injectable } from 'inversify';
import ErrorUtil from '../util/error.util';

@injectable()
export default class PersonController {
	// eslint-disable-next-line class-methods-use-this
	public async create(_: Request, response: Response): Promise<void> {
		try {
			response.status(201).json({ Gaaa: true });
		} catch (e) {
			const { statusCode, body } = ErrorUtil.catchError(e);
			response.status(statusCode).json(body);
		}
	}
}
