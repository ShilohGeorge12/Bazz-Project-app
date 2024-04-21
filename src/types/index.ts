export type UrlPath = '/' | '/not-home' | '/any';

export type USER = {
	_id: string;
} & USER_DB;

export type USER_DB = {
	username: string;
	password: string;
	createdAt: Date;
};

export const PASSWORD_REGEX = /^[a-zA-Z0-9@_-\s]{6,24}$/;
export const USERNAME_REGEX = /^[a-zA-Z\s_-]{2,}$/;
export const PASSWORD_FORMAT_MESSAGE = `Password must be 6-24 characters long and can only contain letters, numbers, @, _, or -.`;
