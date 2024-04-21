// db.ts
import mongoose, { Connection, Model } from 'mongoose';
import { env } from '@/env';
import type { USER_DB } from '@/types';
import { USER_DB_SCHEMA } from './schema/user';

class Database {
	private static instance: Database;
	private connection!: Connection;
	private userModel: Model<USER_DB>;

	private constructor() {
		this.connect();
		this.userModel = this.createUserModel();
	}

	private connect() {
		mongoose.set('strictQuery', false);
		this.connection = mongoose.createConnection(env.DATABASE_URL, {
			writeConcern: { w: 'majority' },
			retryWrites: true,
		});

		this.connection.on('error', (error) => {
			if (error instanceof Error) console.error('MongoDB connection error:', error.message);
		});

		this.connection.once('open', () => {
			console.log('Connected to MongoDB');
		});
	}

	private createUserModel(): Model<USER_DB> {
		const UserSchema = USER_DB_SCHEMA();
		return this.connection.model<USER_DB>('users', UserSchema);
	}

	public static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}

	public getUser(): Model<USER_DB> {
		return this.userModel;
	}
}

export const MongoDB = Database.getInstance();
