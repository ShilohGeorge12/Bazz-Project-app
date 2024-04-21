'use client';

import { UrlPath } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
import { AuthButton, NavButton } from '../../button';
import { useGlobals } from '@/context';
import { useEffect } from 'react';

export function ClientNav() {
	const pathname = usePathname();
	const { push } = useRouter();
	const {
		state: { isloggedIn },
	} = useGlobals();

	const isPath = (path: UrlPath) => {
		if (pathname === path) {
			return 'bg-white text-black rounded-lg';
		}
		return '';
	};

	const onSignUp = async () => {};

	useEffect(() => {
		if (!isloggedIn && pathname === '/results') {
			push('/');
		}
	}, []);

	return (
		<section className='flex items-center gap-8'>
			{!isloggedIn && (
				<AuthButton
					name='Sign Up'
					onClick={() => push('/signup')}
				/>
			)}
			{isloggedIn && (
				<>
					<NavButton
						href='/results'
						more={isPath('/results')}
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
