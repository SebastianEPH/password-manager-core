// import {Pool} from 'mysql2/promise';

export interface Database {
	connect(): Promise<any>;
}
