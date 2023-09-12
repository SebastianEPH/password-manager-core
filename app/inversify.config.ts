import 'reflect-metadata';
import { Container } from 'inversify';
import TYPES from './types';
import PersonController from './controller/person-controller';
import ApiConnectorUtil from './util/api-connector.util';
import { PersonService } from './service/person.service';
import PersonServiceImpl from './service/impl/person.service.impl';
import { Database } from './database/database';
import DatabaseCredentials from './database/database-credentials';
import DatabaseMysqlImpl from './database/impl/database-mysql.impl';

const apiConnectorUtil: ApiConnectorUtil = new ApiConnectorUtil({
	host: '',
});

const container = new Container();
container.bind<PersonController>(TYPES.PersonController).to(PersonController);
container.bind<PersonService>(TYPES.PersonService).to(PersonServiceImpl);
container.bind<ApiConnectorUtil>(TYPES.ApiConnectorUtil).toConstantValue(apiConnectorUtil);

const databaseCredentialsds = new DatabaseCredentials(process.env.DATABASE_MYSQL_HOST ?? undefined, process.env.DATABASE_MYSQL_DATABASE ?? undefined, process.env.DATABASE_MYSQL_USER ?? undefined, process.env.DATABASE_MYSQL_PASSWORD ?? undefined, Number(process.env.DATABASE_MYSQL_CONNECTION_LIMIT) ?? undefined);

container.bind<DatabaseCredentials>(TYPES.DatabaseCredentials).toConstantValue(databaseCredentialsds);

container.bind<Database>(TYPES.CoreClientDatabase).to(DatabaseMysqlImpl);

export default container;
