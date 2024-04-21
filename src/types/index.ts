import { ValidationResult } from 'joi';

export type UrlPath = '/results' | '/not-home' | '/any';

export type USER = {
	readonly _id: string;
} & USER_DB;

export type USER_DB = {
	username: string;
	password: string;
	createdAt: Date;
};

export const PASSWORD_REGEX = /^[a-zA-Z0-9@_-\s]{6,24}$/;
export const USERNAME_REGEX = /^[a-zA-Z\s_-]{2,}$/;
export const PASSWORD_FORMAT_MESSAGE = `Password must be 6-24 characters long and can only contain letters, numbers, @, _, or -.`;

// Context Types
export type stateAction =
	| { type: 'user'; payload: { user: USER } }
	| { type: 'logIn'; payload: { isloggedIn: true; user: USER } }
	| { type: 'logOut'; payload: { isloggedIn: false } };

export interface State {
	isloggedIn: boolean;
	user: USER;
}

export interface Icontext {
	state: State;
}

export type ReducerType = (state: State, action: stateAction) => State;

// validation Types
export type userReturnType = Omit<USER_DB, 'createdAt'>;

export type validateUsersReturnType = ValidationResult<userReturnType>;

// HTTP Response Types
interface ErrorType {
	readonly error: string | string[];
}
interface Message {
	readonly message: string;
}

export type responseTypes = USER | ErrorType | Message;

// Type Guards
export const isResError = (_arg: responseTypes): _arg is ErrorType => (_arg as ErrorType).error !== undefined;
export const isUser = (_arg: responseTypes): _arg is USER => (_arg as USER).username !== undefined;
export const isMessage = (_arg: responseTypes): _arg is Message => (_arg as Message).message !== undefined;
