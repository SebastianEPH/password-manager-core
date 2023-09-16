import { createPool, Pool } from 'mysql2/promise';
import { inject, injectable } from 'inversify';
import { Database } from '../database';
import TYPES from '../../types';

import DatabaseCredentialsSql from '../../interface/database-credentials-sql.interface';

@injectable()
export default class DatabaseMysqlImpl implements Database {
	constructor(@inject(TYPES.DatabaseCredentials) private databaseCredentials: DatabaseCredentialsSql) {}

	async connect(): Promise<Pool> {
		const connection: Pool = createPool({
			host: this.databaseCredentials.host,
			user: this.databaseCredentials.user,
			database: this.databaseCredentials.database,
			password: this.databaseCredentials.password,
			// authPlugins: {
			// 	mysql_clear_password: () => () => Buffer.from(this.databaseCredentials.password),
			// },
			connectionLimit: this.databaseCredentials.connectionLimit,
		});
		console.log();
		return connection;
	}
}
