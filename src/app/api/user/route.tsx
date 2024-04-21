import { MongoDB } from '@/db';
import { validateUsers } from '@/db/validator';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(_: NextRequest) {
	const users = await MongoDB.getUser().find().sort('username').select('-__v -password');

	return NextResponse.json(users, { status: 200 });
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.formData();
		const bodyObj = Object.fromEntries(body.entries());
		const { error, value } = validateUsers(bodyObj);

		if (error) {
			console.log(error);
			const errArr: (string | null)[] = [];
			error.details.map((err) => errArr.push(err.message));
			return NextResponse.json({ error: errArr }, { status: 400 });
		}

		const checkUser = await MongoDB.getUser().findOne({ username: value.username });
		if (checkUser) {
			return NextResponse.json({ error: `User ${value.username} Already Exit` }, { status: 400 });
		}

		const newUser = await MongoDB.getUser().create({
			username: value.username,
			password: value.password,
		});

		return NextResponse.json({ message: `User ${newUser.username} Was Successfully Created` }, { status: 201 });
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		}
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
