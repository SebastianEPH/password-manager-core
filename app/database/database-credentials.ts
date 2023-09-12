export default class DatabaseCredentials {
	constructor(
		public host: string,
		public database: string,
		public user: string,
		public password: string,
		public connectionLimit: number,
	) {}
}
