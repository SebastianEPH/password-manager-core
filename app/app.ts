import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';
import morgan from 'morgan';
import container from './container';
import { ENV } from './commons/enum';

class App {
	private server: InversifyExpressServer;

	private app: Application;

	constructor() {
		this.server = new InversifyExpressServer(container);

		this.initConfig();
		this.build();
	}

	private initConfig() {
		this.server.setConfig((app: Application): void => {
			app.use(express.json());
			app.use(express.urlencoded({ extended: false }));
			app.use(cors());
			app.use(morgan(<string>process.env[ENV.MORGAN_ENV]));
			app.set(ENV.PORT, <string>process.env[ENV.PORT]);
			app.set(ENV.VERSION, <string>process.env[ENV.VERSION]);
			app.set(ENV.APP_ENV, <string>process.env[ENV.APP_ENV]);
		});
	}

	private build() {
		this.app = this.server.build();
	}

	public listen() {
		this.app.listen(this.app.get(ENV.PORT), () => {
			console.log(`Server ${this.app.get(ENV.VERSION)} on PORT: ${this.app.get(ENV.PORT)} | Current Environment: ${this.app.get(ENV.APP_ENV)}`);
		});
	}
}

export default App;
