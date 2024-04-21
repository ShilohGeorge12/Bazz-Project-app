import { NotFoundClient } from '@/components/UI/notfoundClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: `404 - Page Not Found`,
	description: `404 Error - The Page you are looking for was Not Found.`,
};

export default function NotFound() {
	return (
		<main className='w-full h-full'>
			<NotFoundClient />
		</main>
	);
}
