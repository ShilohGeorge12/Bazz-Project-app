import { userReturnType, validateUsersReturnType } from '@/types';
import joi from 'joi';

export function validateUsers(schema: unknown): validateUsersReturnType {
	const userSchema = joi.object<userReturnType>({
		username: joi.string().min(2).required(),
		password: joi.string().min(2).required(),
	});
	return userSchema.validate(schema, { abortEarly: false });
}
