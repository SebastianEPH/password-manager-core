import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import { ENV, HTTP } from './util/enum.util';
import PersonRouter from './router/person.router';

class ServerGaaa {
	public app: Application;

	public ENDPOINT: string;

	constructor() {
		this.app = express();
		this.app.use(cors());
		this.app.use(morgan(<string>process.env[ENV.MORGAN_ENV]));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.config();
		this.routes();
	}

	private config(): void {
		this.app.set(ENV.PORT, <string>process.env[ENV.PORT]);
		this.app.set(ENV.VERSION, <string>process.env[ENV.VERSION]);
		this.app.set(ENV.APP_ENV, <string>process.env[ENV.APP_ENV]);
	}

	private async notFound(): Promise<void> {
		console.log('Segundo');
		this.app.use((_: Request, res: Response): void => {
			res.status(HTTP.STATUS_CODE_404).json({ error: 'Ruta no encontrada' });
		});
	}

	private async routes(): Promise<void> {
		this.ENDPOINT = `/api/${this.app.get(ENV.VERSION)}`;

		console.log('primero');

		this.app.use(this.ENDPOINT, new PersonRouter().config);

		await this.notFound();
	}

	start(): void {
		this.app.listen(this.app.get(ENV.PORT), (): void => {
			console.log(`Server ${this.app.get(ENV.VERSION)} on PORT: ${this.app.get(ENV.PORT)} | Current Environment: ${this.app.get(ENV.APP_ENV)}`);
		});
	}
}

const server: ServerGaaa = new ServerGaaa();
server.start();
