'use client';

import { PASSWORD_FORMAT_MESSAGE, PASSWORD_REGEX, USERNAME_REGEX } from '@/types';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { MouseEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface formProps {}

export function Form({}: formProps) {
	const initState = {
		username: '',
		password: '',
	};
	const { push } = useRouter();
	const [viewPasword, setViewPasword] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string[]>([]);
	const [status, setStatus] = useState<'fetching' | 'idle'>('idle');
	const [details, setDetails] = useState<typeof initState>(initState);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setDetails((prev) => ({ ...prev, [name]: value }));
	};

	const onViewPasword = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (viewPasword) {
			setViewPasword(false);
		} else {
			setViewPasword(true);
		}
	};

	const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setErrorMessage([]);
		const { username, password } = details;

		if (username === '' || password === '') {
			setErrorMessage((prev) => [...prev, 'All Input Fields are required!!']);
			return;
		}
		let hasError: boolean = false;

		if (!USERNAME_REGEX.test(username)) {
			setErrorMessage((prev) => [...prev, `Username (${username}) must be at least 2 characters long and can only contain letters, @, _, or -.`]);
			hasError = true;
		}

		if (!PASSWORD_REGEX.test(password)) {
			setErrorMessage((prev) => [...prev, PASSWORD_FORMAT_MESSAGE]);
			hasError = true;
		}

		// const promise = async () => {
		// 	const body = {
		// 		username: details.username.trim(),
		// 		password: details.password.trim(),
		// 		// email: details.email.trim(),
		// 	};

		// 	const req = await fetch('/api/login', {
		// 		method: 'POST',
		// 		body: JSON.stringify(body),
		// 	});
		// 	const res = (await req.json()) as unknown as responseTypes;
		// 	return res;
		// };

		push('/results');
	};

	return (
		<section className='flex flex-col items-start gap-8 w-full'>
			<div className='w-full h-10 flex items-center justify-center'>
				<input
					type='text'
					name='username'
					placeholder='Username'
					onChange={onChange}
					className='border-b focus:border-white transition-all duration-500 ease-in-out focus:border-b-2 outline-0 border-gray-400 bg-transparent p-2 placeholder-gray-400 tracking-wider font-medium h-full w-[70%]'
				/>
			</div>
			<div className='w-full h-10 flex items-center justify-center'>
				<input
					type={viewPasword ? 'text' : 'password'}
					name='password'
					placeholder='Password'
					onChange={onChange}
					className='border-b focus:border-white transition-all duration-500 ease-in-out focus:border-b-2 outline-0 border-gray-400 bg-transparent p-2 pr-6 placeholder-gray-400 tracking-wider font-medium h-full w-[70%]'
				/>
				<button
					type='button'
					className={`-ml-5 text-white text-base`}
					onClick={onViewPasword}>
					{viewPasword ? <FaEyeSlash /> : <FaEye />}
				</button>
			</div>

			<div className='w-full h-10 flex items-center justify-center'>
				<button
					type='button'
					name={``}
					className={`w-[70%] h-full transition-all duration-500 ease-in-out hover:scale-105 text-xl font-medium  bg-white text-black rounded-xl tracking-wider`}
					onClick={onSubmit}>
					Submit
				</button>
			</div>

			{errorMessage.length > 0 && (
				<ul
					aria-errormessage='Login Error Message'
					className='flex flex-col gap-2 w-full min-h-28 rounded-lg text-white p-3 items-center'>
					{errorMessage.map((error) => (
						<li
							className='font-semibold tracking-wider capitalize'
							key={error}>
							{error}
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
