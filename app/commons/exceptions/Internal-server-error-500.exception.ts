import { HTTP } from '../enum';
import { ResponseVo } from '../../interface';

export default class InternalServerError500Exception extends Error {
	public readonly statusCode: HTTP = HTTP.STATUS_CODE_500;

	constructor(
		public origin: string = '',
		public description: string = '',
	) {
		super();
	}

	public response: ResponseVo = { user_message: 'Ocurrió un error interno', body: null };
}
