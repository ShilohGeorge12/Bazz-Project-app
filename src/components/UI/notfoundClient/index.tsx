'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function NotFoundClient() {
	return (
		<motion.section
			className={`flex flex-col items-center justify-center gap-8 w-full h-full`}
			initial={{ opacity: 0, translateY: '-100vh', translateZ: -100 }}
			animate={{ opacity: 1, translateX: '0vw', translateY: '0vh', translateZ: 0 }}
			exit={{ opacity: 0, translateZ: -100 }}
			transition={{ type: 'spring', damping: 10, stiffness: 100 }}>
			<section className='flex items-center justify-center gap-4 w-[90%]'>
				<Image
					src={'/images/notFound.png'}
					loading='eager'
					alt='sadhime'
					title='sadhime'
					className={`w-[15%] hover:scale-105 transition duration-300 ease-in-out`}
					width={1000}
					height={1000}
				/>
				<div className='w-1 md:h-36 h-20 rounded-xl bg-gray-300' />
				<p className='text-justify'>The Page you are looking for was Not Found</p>
			</section>
			<Link
				href={'/'}
				className={`w-40 h-8 flex items-center justify-center bg-white text-black rounded-lg transition duration-500 hover:shadow-md hover:scale-105`}>
				Back To Home Page
			</Link>
		</motion.section>
	);
}
