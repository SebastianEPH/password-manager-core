export default interface ResponseVo {
	user_message?: string;
	message?: string;
	error?: Error;
	body: object | object[] | undefined;
}
