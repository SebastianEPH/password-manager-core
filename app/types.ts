const TYPES = {
	PersonController: Symbol.for('PersonController'),
	PersonService: Symbol.for('PersonService'),
	ApiConnectorUtil: Symbol.for('ApiConnectorUtil'),
	Repository: Symbol.for('Repository'),

	ConfigLog: Symbol.for('ConfigLog'),
	Log: Symbol.for('Log'),

	// Database
	CoreClientDatabase: Symbol.for('CoreClientDatabase'),
	DatabaseCredentials: Symbol.for('DatabaseCredentials'),
};

export default TYPES;
