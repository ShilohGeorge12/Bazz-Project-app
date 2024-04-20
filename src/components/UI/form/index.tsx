'use client';

export function Form() {
	return (
		<section className='flex flex-col items-start gap-8 w-full'>
			<div className='w-full h-10 flex items-center justify-center'>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='border-b focus:border-white transition-all duration-500 ease-in-out focus:border-b-2 outline-0 border-gray-400 bg-transparent p-2 placeholder-gray-400 tracking-wider font-medium h-full w-[70%]'
				/>
			</div>
			<div className='w-full h-10 flex items-center justify-center'>
				<input
					type='text'
					name='password'
					placeholder='Password'
					className='border-b focus:border-white transition-all duration-500 ease-in-out focus:border-b-2 outline-0 border-gray-400 bg-transparent p-2 placeholder-gray-400 tracking-wider font-medium h-full w-[70%]'
				/>
			</div>

			<div className='w-full h-10 flex items-center justify-center'>
				<button
					type='button'
					name={``}
					className={`w-[70%] h-full transition-all duration-500 ease-in-out hover:scale-105 text-xl font-medium  bg-white text-black rounded-xl tracking-wider`}
					// onClick={() => null}
				>
					Submit
				</button>
			</div>
		</section>
	);
}
