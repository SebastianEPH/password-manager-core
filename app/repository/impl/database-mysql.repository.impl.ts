import { inject, injectable } from 'inversify';
import { DATABASE_MESSAGE, DATABASE_TYPE } from '../../commons/constants';
import { DatabaseResponse } from '../../models/database-response.model';
import { DatabaseRepository } from '../database.repository';
import TYPES from '../../types';
import { NUM } from '../../util/enum.util';
import { Database } from '../../database/database';

@injectable()
export default class DatabaseRepositoryMysqlMockImpl implements DatabaseRepository {
	constructor(@inject(TYPES.CoreClientDatabase) private database: Database) {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async create(data: any): Promise<DatabaseResponse> {
		const query: string = 'insert * FROM test;';
		try {
			const conn = await this.database.connect();
			const posts = await conn.query(query);
			return new DatabaseResponse({
				success: true,
				data: posts[NUM.ZERO],
				message: DATABASE_MESSAGE.INSERT_SUCCESSFULLY,
				type: DATABASE_TYPE.INSERT,
				query,
			});
		} catch (e) {
			return new DatabaseResponse({
				success: false,
				message: DATABASE_MESSAGE.INSERT_ERROR,
				query,
				type: DATABASE_TYPE.INSERT,
			});
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async getAll(data: any): Promise<DatabaseResponse> {
		const query: string = 'SELECT * FROM test;';
		try {
			const conn = await this.database.connect();
			const posts = await conn.query(query);
			return new DatabaseResponse({
				success: true,
				data: posts[NUM.ZERO],
				message: DATABASE_MESSAGE.SELECT_SUCCESSFULLY,
				type: DATABASE_TYPE.SELECT,
				query,
			});
		} catch (e) {
			return new DatabaseResponse({
				success: false,
				message: DATABASE_MESSAGE.SELECT_ERROR,
				query,
				type: DATABASE_TYPE.SELECT,
			});
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async getOne(data: any): Promise<DatabaseResponse> {
		const query: string = 'select * FROM test;';
		try {
			const conn = await this.database.connect();
			const posts = await conn.query(query);
			return new DatabaseResponse({
				success: true,
				data: posts[NUM.ZERO],
				message: DATABASE_MESSAGE.SELECT_SUCCESSFULLY,
				type: DATABASE_TYPE.SELECT,
				query,
			});
		} catch (e) {
			return new DatabaseResponse({
				success: false,
				message: DATABASE_MESSAGE.SELECT_ERROR,
				query,
				type: DATABASE_TYPE.SELECT,
			});
		}
	}
}

// OkPacket: Es retornado después de una consulta que modifica datos en la base de datos, como una inserción,
// actualización o eliminación de registros. El OkPacket contiene información sobre la cantidad de filas afectadas,
// el ID de inserción (si corresponde) y otros detalles de la operación.

// ResultSetHeader: Es retornado después de una consulta SELECT que devuelve un conjunto de resultados.
// El ResultSetHeader contiene información sobre la cantidad de filas devueltas por la consulta, la cantidad de columnas,
// y otros detalles del resultado.

// RowDataPacket: Es retornado cuando una consulta SELECT devuelve una o varias filas de datos.
// El RowDataPacket representa una fila individual de la consulta y contiene las propiedades que corresponden a
// las columnas y sus respectivos valores.
