export default interface DatabaseCredentialsSql {
	readonly host: string;
	readonly database: string;
	readonly user: string;
	readonly password: string;
	readonly connectionLimit: number;
}
