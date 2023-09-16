// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosInstance } from 'axios';
import OthersMapper from '../mapper/other.mapper';
import { ResponseProvider } from '../interface';

interface ApiConnectorConfig {
	host: string;
}

export default class ApiConnectorUtil {
	private axiosInstance: AxiosInstance;

	constructor(private readonly config: ApiConnectorConfig) {
		this.axiosInstance = axios.create({
			baseURL: this.config.host,
		});
	}

	async post(path: string, payload: object, headers: object = {}): Promise<ResponseProvider> {
		try {
			const { data, status, headers: headerResponse, config, request } = await this.axiosInstance.post(path, payload, { headers });
			return {
				statusCode: OthersMapper.parseStatusCode(String(status)),
				body: data,
				config,
				headers: headerResponse,
				request,
			};
		} catch (error) {
			return {
				statusCode: OthersMapper.parseStatusCode(String(error.response.status)),
				body: error.response.data,
				headers: error.response.headers,
				config: error.response.config,
				request: error.response.request,
			};
		}
	}
}
