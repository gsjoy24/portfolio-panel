export type TUser = {
	email: string;
	iat: number;
	exp: number;
};
export type TAuthState = {
	user: null | TUser;
	token: null | string;
};
