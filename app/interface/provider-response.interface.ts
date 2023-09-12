import { HTTP } from '../util/enum.util';

export default interface ResponseProvider {
	statusCode: HTTP;
	body: object;
	headers?: object;
	config?: object;
	request?: object;
}
