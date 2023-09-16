import { LOG_MODE } from '../commons/enum';

export default interface ConfigLog {
	outputMode: LOG_MODE;
	levelInString: boolean;
}
