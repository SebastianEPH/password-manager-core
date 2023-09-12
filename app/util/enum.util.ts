export enum APP_ENVIRONMENT {
	LOCAL = 'local',
	DEV = 'dev',
	PRODUCTION = 'production',
}
export enum ENV {
	PORT = 'PORT',
	VERSION = 'VERSION',
	APP_ENV = 'APP_ENV',
	MORGAN_ENV = 'MORGAN_ENV',
}
export enum HEADERS {
	ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers',
	ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin',
	ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods',
	X_AMZ_DATE = 'X-Amz-Date',
	AUTHORIZATION = 'Authorization',
	X_API_KEY = 'X-Api-Key',
	X_AMZ_SECURITY_TOKEN = 'X-Amz-Security-Token',
	CONTENT_TYPE = 'Content-Type',
	CONTENT_TYPE_LOWER = 'content-type',
}
export enum HEADERS_VALUE {
	ALLOW = '*',
	APPLICATION_JSON = 'application/json',
}
export enum HTTP {
	STATUS_CODE_201 = 201,
	STATUS_CODE_200 = 200,
	STATUS_CODE_400 = 400,
	STATUS_CODE_401 = 401,
	STATUS_CODE_403 = 403,
	STATUS_CODE_404 = 404,
	STATUS_CODE_500 = 500,
}
export enum TAG {
	ERROR_UTIL = 'Util ErrorUtil             | ',
	CONTROLLER_PERSON = 'PersonController           | ',
}
export enum NAME {
	ERROR_UTIL = 'errorUtil()',
}

export enum NUM {
	ZERO = 0,
	ONE = 1,
	TWO = 2,
	THREE = 3,
	FOUR = 4,
	FIVE = 5,
	SIX = 6,
	SEVEN = 7,
	EIGHT = 8,
	NINE = 9,
	TEN = 10,
	TWELVE = 12,
	THIRTEEN = 13,
	SIXTEEN = 16,
	NINE_TEEN = 19,
	TWENTY_FIVE = 25,
	FIFTY = 50,
	TEN_THOUSND = 10000,
	ONE_TRILLION = 1000000000000,
	TEN_CUATRILLION = 10000000000000000,
}
export const NUMERIC_BASE = {
	BINARY: 2, // Base binaria (0-1)
	OCTAL: 8, // Base octal (0-7)
	DECIMAL: 10, // Base decimal (0-9)
	HEXADECIMAL: 16, // Base hexadecimal (0-F)
};
