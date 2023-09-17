import 'reflect-metadata';
import { Container } from 'inversify';
import TYPES from './types';
import PersonController from './controller/person-controller';
import { ApiConnectorUtil } from './util';
import { PersonService } from './service/person.service';
import PersonServiceImpl from './service/impl/person.service.impl';
import { Database } from './database/database';
import { DatabaseCredentialsSql } from './interface';
import DatabaseMysqlImpl from './database/impl/database-mysql.impl';
import { ENV, LOG_MODE } from './commons/enum';
import { DatabaseRepository } from './repository/database.repository';
import DatabaseRepositoryMysqlMockImpl from './repository/impl/database-mysql.repository.impl';
import ConfigLog from './interface/config-log.interface';
import Log from './util/log.util.impl';
import TAG from './tags';

const configLog: ConfigLog = {
	outputMode: LOG_MODE.SHORT,
	levelInString: false,
};
const apiConnectorUtil: ApiConnectorUtil = new ApiConnectorUtil({
	host: '',
});
const mySqlCredentials: DatabaseCredentialsSql = {
	host: <string>process.env[ENV.DATABASE_MYSQL_HOST],
	database: <string>process.env[ENV.DATABASE_MYSQL_DATABASE],
	user: <string>process.env[ENV.DATABASE_MYSQL_USER],
	password: <string>process.env[ENV.DATABASE_MYSQL_PASSWORD],
	connectionLimit: +(<string>process.env[ENV.DATABASE_MYSQL_CONNECTION_LIMIT]),
};

const container: Container = new Container();
container.bind<PersonController>(TYPES.PersonController).to(PersonController).whenTargetIsDefault();
container.bind<PersonService>(TYPES.PersonService).to(PersonServiceImpl).whenTargetIsDefault();
container.bind<DatabaseRepository>(TYPES.Repository).to(DatabaseRepositoryMysqlMockImpl);
container.bind<Database>(TYPES.CoreClientDatabase).to(DatabaseMysqlImpl);
container.bind<Log>(TYPES.Log).to(Log).whenTargetIsDefault();

container.bind<ConfigLog>(TYPES.ConfigLog).toConstantValue(configLog);
container.bind<DatabaseCredentialsSql>(TYPES.DatabaseCredentials).toConstantValue(mySqlCredentials);
container.bind<ApiConnectorUtil>(TYPES.ApiConnectorUtil).toConstantValue(apiConnectorUtil).whenTargetNamed(TAG.PROVIDER_NONE);

export default container;
