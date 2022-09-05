import React from 'react';
import { TbBrandLinkedin } from 'react-icons/tb';
import link from '../utils/social.json';

export default function Hero() {
	return (
		<div className='m-3 md:min-h-screen'>
			<h3 className='md:text-xl text-base'>Hey my name is</h3>
			<h2 className='md:text-8xl text-4xl font-bold name-font'>
				Rajeshwar Kashyap.
			</h2>
			<h4 className='md:text-4xl text-2xl name-font font-bold'>
				Full Stack Developer
			</h4>
			<p className='md:text-xl text-xl'>
				Experienced Software Developer with a demonstrated history of working in
				the Software development and web development. Skilled in PHP, HTML, CSS,
				JavaScript, NodeJs, ReactJs, NextJS, Laravel, CodeIgniter, React Native.
				Currently Working in{' '}
				<a
					href='http://sarmicrosystems.in/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<b className='dark:text-hoverDark text-hoverLight'>
						SAR Software Solutions
					</b>
				</a>
			</p>
			<div>
				<div className='flex  mt-4 flex-row  mx-auto justify-center '>
					<a href={link.linkedin} target='_blank' rel='noopener noreferrer'>
						<button className='mx-2 my-2 flex flex-row border-hoverLight dark:border-hoverDark hover:bg-[#f5083959] dark:hover:bg-[#61f4e92b]  transition duration-150 ease-in-out   rounded border  text-hoverLight dark:text-hoverDark px-8 py-3 text-lg'>
							<TbBrandLinkedin
								className='text-blue   ease-in duration-300 mr-5'
								size={30}
							/>
							Connect
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
