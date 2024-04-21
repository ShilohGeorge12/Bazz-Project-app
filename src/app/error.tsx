'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Error({ reset }: { error: Error; reset: () => void }) {
	return (
		<motion.main
			className='w-full h-full flex flex-col'
			initial={{ opacity: 0, translateY: '-100vh', translateZ: -100 }}
			animate={{ opacity: 1, translateX: '0vw', translateY: '0vh', translateZ: 0 }}
			exit={{ opacity: 0, translateZ: -100 }}
			transition={{ type: 'spring', damping: 10, stiffness: 100 }}>
			<section className='w-full min-h-screen h-full flex items-center gap-4 justify-center'>
				<Image
					src='/images/error.png'
					className={`w-[30%] md:w-[15%] hover:scale-105 transition duration-300 ease-in-out`}
					loading='eager'
					title='error Something went wrong'
					alt='error Something went wrong'
					width={1000}
					height={1000}
				/>
				<hr className='w-1 md:h-40 h-36 rounded-xl bg-gray-300' />
				<section className='flex flex-col gap-4 items-center'>
					<p className='text-sm md:text-lg font-bold tracking-wider text-gray-500'>Something Went Wrong! </p>
					<button
						onClick={() => reset()}
						className={`w-[5.5rem] h-10 border border-white text-white hover:text-black hover:bg-white rounded-xl ease-linear transition duration-300 hover:scale-105`}>
						Try again
					</button>
				</section>
			</section>
		</motion.main>
	);
}
