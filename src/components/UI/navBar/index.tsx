import { ClientNav } from './clientNav';

export function NavBar() {
	return (
		<nav className='w-full min-h-10 flex md:px-16 px-2 py-2 items-center justify-between'>
			<div className='flex gap-2'>
				{/* Image Logo */}
				<span className='w-8 h-7 rounded-[50%] bg-white flex'></span>
				<h1 className='font-bold text-lg tracking-wider italic'>LIS</h1>
			</div>

			<ClientNav />
		</nav>
	);
}
