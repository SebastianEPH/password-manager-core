import { HTTP } from '../util/enum.util';

export default class OtherMapper {
	public static parseStatusCode(status: string): HTTP {
		if (!/^\d+$/.test(status)) return HTTP.STATUS_CODE_500;
		if (Object.values(HTTP).includes(Number(status) as HTTP)) return Number(status) as HTTP;
		return HTTP.STATUS_CODE_500;
	}
}
