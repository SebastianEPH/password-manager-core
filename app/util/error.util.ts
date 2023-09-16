import { InternalServerError500Exception } from '../commons/exceptions';
import { APP_ENVIRONMENT, ENV, HTTP, TAG } from '../commons/enum';
import { ResponseVo } from '../interface';

export default class ErrorUtil {
	public static catchError(e: Error): { statusCode: HTTP; body: ResponseVo } {
		let isDevelopment: boolean = false;
		const objectError: Error = {
			name: e?.name,
			message: e?.message,
			stack: e?.stack,
		};

		if (<string>process.env[ENV.APP_ENV] === APP_ENVIRONMENT.LOCAL || <string>process.env[ENV.APP_ENV] === APP_ENVIRONMENT.DEV) {
			isDevelopment = true;
		}

		if (e instanceof InternalServerError500Exception) {
			const { origin, statusCode, description, response } = e;
			console.log(`${origin} | exception`, JSON.stringify(e));
			console.log(`${origin} | ${description} | Error`, JSON.stringify(response));
			return {
				statusCode,
				body: isDevelopment
					? {
							...response,
							error: objectError,
					  }
					: response,
			};
		}

		const response: ResponseVo = {
			body: {},
			user_message: 'sucedió un error 500, no controlado por exceptions',
		};

		console.log(`${TAG.ERROR_UTIL} | exception`, JSON.stringify(objectError));
		console.log(`${TAG.ERROR_UTIL} | Error 500 Response: `, JSON.stringify(response));
		return {
			statusCode: HTTP.STATUS_CODE_500,
			body: isDevelopment
				? {
						...response,
						error: objectError,
				  }
				: response,
		};
	}
}
