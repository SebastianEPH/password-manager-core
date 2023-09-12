import 'reflect-metadata';
import { Container } from 'inversify';
import { PersonController } from '../controller/person.controller';
import TYPES from '../types';

const personContainerInstance: Container = new Container();

personContainerInstance.bind<PersonController>(TYPES.PersonController).to(PersonController);

export default personContainerInstance;
