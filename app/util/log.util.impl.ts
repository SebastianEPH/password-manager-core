import format from 'bunyan-format';
import Logger, { stdSerializers } from 'bunyan';
import { inject, injectable } from 'inversify';
import { LOG_TYPE } from '../commons/enum';
import TYPES from '../types';
import ConfigLog from '../interface/config-log.interface';

@injectable()
export default class Log {
	private readonly coloredFormat: any;

	constructor(@inject(TYPES.ConfigLog) private configLog: ConfigLog) {
		const { outputMode, levelInString } = this.configLog;
		this.coloredFormat = format({ outputMode, levelInString });
	}

	public trace(name: string, message: string, data?: Record<string, any>): void {
		const logger: Logger = Logger.createLogger({
			name,
			level: LOG_TYPE.TRACE,
			stream: this.coloredFormat,
			serializers: stdSerializers,
		});
		logger.trace(data, message);
	}

	public fatal(name: string, message: string, data?: Record<string, any>): void {
		const logger: Logger = Logger.createLogger({
			name,
			level: LOG_TYPE.FATAL,
			stream: this.coloredFormat,
			serializers: stdSerializers,
		});
		logger.fatal(data, message);
	}

	public debug(name: string, message: string, data?: Record<string, any>): void {
		const logger: Logger = Logger.createLogger({
			name,
			level: LOG_TYPE.DEBUG,
			stream: this.coloredFormat,
			serializers: stdSerializers,
		});
		logger.debug(data, message);
	}

	public info(name: string, message: string, data?: Record<string, any>): void {
		const logger: Logger = Logger.createLogger({
			name,
			level: LOG_TYPE.INFO,
			stream: this.coloredFormat,
			serializers: stdSerializers,
		});
		logger.info(data, message);
	}

	public warn(name: string, message: string, data?: Record<string, any>): void {
		const logger: Logger = Logger.createLogger({
			name,
			level: LOG_TYPE.WARN,
			stream: this.coloredFormat,
			serializers: stdSerializers,
		});
		logger.warn(data, message);
	}
}
