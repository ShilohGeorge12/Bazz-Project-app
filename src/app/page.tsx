import { Form } from '@/components/UI/form';

export default function Home() {
	// return new Error('testing');

	return (
		<main className='flex flex-col w-full h-full items-center justify-center'>
			<form className='border border-gray-500 w-[40%] min-h-[50%] rounded-3xl p-4 flex flex-col items-center gap-6'>
				<h1 className='font-semibold text-2xl text-gray-300'>Log In</h1>
				<Form type='login' />
			</form>
		</main>
	);
}
