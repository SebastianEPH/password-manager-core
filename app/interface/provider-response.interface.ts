import { HTTP } from '../commons/enum';

export default interface ResponseProvider {
	statusCode: HTTP;
	body: object;
	headers?: object;
	config?: object;
	request?: object;
}
