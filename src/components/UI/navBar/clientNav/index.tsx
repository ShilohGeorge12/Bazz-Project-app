'use client';

import { UrlPath } from '@/types';
import { usePathname } from 'next/navigation';
import { AuthButton, NavButton } from '../../button';
import { useGlobals } from '@/context';
import { toast } from 'sonner';

export function ClientNav() {
	const pathname = usePathname();
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

	console.log(`log in: ${isloggedIn}`);
	return (
		<section className='flex items-center gap-8'>
			{!isloggedIn && (
				<AuthButton
					name='Sign Up'
					onClick={onSignUp}
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
