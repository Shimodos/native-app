export interface IAuthResponse {
	accessToken: string | null;
	isLoading: boolean;
	error: string | null;
}

export interface IloginRequest {
	email: string;
	password: string;
}
