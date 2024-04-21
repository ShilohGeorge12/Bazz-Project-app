import Link from 'next/link';

interface buttonProps {
	name: string;
	more: string;
	href: string;
	onClick: () => void;
}

export function NavButton({ href, more, name, lg }: { lg?: true } & Omit<buttonProps, 'onClick'>) {
	return (
		<Link
			href={href}
			title={name}
			className={`${
				lg ? 'md:w-24 w-20' : 'md:w-16 w-14'
			} h-8 md:h-11 group transition-all duration-500 ease-in-out border-0 ${more} flex flex-col items-center justify-center gap-y-0.5`}>
			{name}
			<span className='w-[70%] h-[2px] group-hover:flex hidden bg-white' />
		</Link>
	);
}

export function AuthButton({ name, onClick }: Omit<buttonProps, 'href' | 'more'>) {
	return (
		<button
			type='button'
			name={name}
			className={`px-4 p-2 border-white border rounded-lg hover:bg-white hover:text-black transition duration-500 ease-in-out tracking-wide`}
			onClick={onClick}>
			{name}
		</button>
	);
}
