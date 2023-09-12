import 'reflect-metadata';
import { Container } from 'inversify';
import TYPES from './types';
import PersonController from './controller/person-controller';
import ApiConnectorUtil from './util/api-connector.util';
import { PersonService } from './service/person.service';
import PersonServiceImpl from './service/impl/person.service.impl';

const apiConnectorUtil: ApiConnectorUtil = new ApiConnectorUtil({
	host: '',
});

const container = new Container();
container.bind<PersonController>(TYPES.PersonController).to(PersonController);
container.bind<PersonService>(TYPES.PersonService).to(PersonServiceImpl);
container.bind<ApiConnectorUtil>(TYPES.ApiConnectorUtil).toConstantValue(apiConnectorUtil);

export default container;
