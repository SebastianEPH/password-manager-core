import { createPool, Pool } from 'mysql2/promise';
import { inject, injectable } from 'inversify';
import { Database } from '../database';
import TYPES from '../../types';

import DatabaseCredentials from '../database-credentials';

@injectable()
export default class DatabaseMysqlImpl implements Database {
	constructor(@inject(TYPES.DatabaseCredentials) private databaseCredentials: DatabaseCredentials) {}

	async connect(): Promise<Pool> {
		const connection: Pool = await createPool({
			host: this.databaseCredentials.host,
			user: this.databaseCredentials.user,
			database: this.databaseCredentials.database,
			password: this.databaseCredentials.password,
			authPlugins: {
				mysql_clear_password: () => () => Buffer.from(this.databaseCredentials.password),
			},
			connectionLimit: this.databaseCredentials.connectionLimit,
		});
		return connection;
	}
}
