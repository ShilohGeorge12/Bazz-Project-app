'use client';

import { UrlPath } from '@/types';
import { usePathname } from 'next/navigation';
import { AuthButton, NavButton } from '../../button';

export function ClientNav() {
	const pathname = usePathname();
	const isPath = (path: UrlPath) => {
		if (pathname === path || pathname.includes(path)) {
			return 'bg-white text-black rounded-lg';
		}
		return '';
	};
	const isLoggedIn: boolean = false;
	const onSignUp = async () => {};

	return (
		<section className='flex items-center gap-8'>
			{!isLoggedIn && (
				<AuthButton
					name='Sign Up'
					onClick={onSignUp}
				/>
			)}
			{isLoggedIn && (
				<>
					<NavButton
						href='/'
						more={isPath('/')}
						name='Home'
					/>
					<NavButton
						href={`/not-home`}
						more={isPath('/not-home')}
						name='Not Home'
						lg
					/>
					<NavButton
						href={`/any`}
						more={isPath('/any')}
						name='Any'
					/>
				</>
			)}
		</section>
	);
}
