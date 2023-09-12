import { DATABASE_TYPE } from '../commons/constants';

export class DatabaseResponse {
	public success: boolean;

	public data?: any;

	public message?: string;

	public query: string;

	public type: DATABASE_TYPE;

	constructor(params: { success: boolean; data?: any; message?: string; query: string; type: DATABASE_TYPE }) {
		this.success = params.success;
		this.data = params.data;
		this.message = params.message;
		this.query = params.query;
		this.type = params.type;
	}
}
