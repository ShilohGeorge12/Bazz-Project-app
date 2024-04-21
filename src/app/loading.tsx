import { Spinner } from '@/components/UI/loadingSpinner';

export default function Loading() {
	return (
		<main className='w-full h-full flex flex-col'>
			<Spinner />
		</main>
	);
}
