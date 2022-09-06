/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
	TbBrandBootstrap,
	TbBrandCss3,
	TbBrandHtml5,
	TbBrandJavascript,
	TbBrandNextjs,
	TbBrandPhp,
	TbBrandReactNative,
	TbBrandTailwind,
} from 'react-icons/tb';
import { IoLogoNodejs } from 'react-icons/io';
import {
	SiReact,
	SiMongodb,
	SiMysql,
	SiTypescript,
	SiCodeigniter,
	SiLaravel,
	SiMaterialui,
	SiAmazonaws,
} from 'react-icons/si';
import { FaNpm, FaSass, FaYarn } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutMe() {
	return (
		<div className='md:min-h-screen mt-9'>
			<h3 className='title text-center md:text-7xl text-5xl'>About Me</h3>
			<div className='flex flex-col sm:flex-row'>
				<div className='md:text-xl text-base md:w-[70%] my-3'>
					<p>
						Hello! My name is <strong>Rajeshwar Kashyap</strong> and I enjoy
						creating things that live on the internet. My interest in web
						development started back in 2018 when I decided to try to make html
						pages for google blog post — after that i have take one web
						development course for brushup my skills!{' '}
					</p>
					<p>
						Start My First, IT job in service based company there I was learn
						most of things that i have currently.
					</p>
					<p>
						Currently Working in{' '}
						<a
							href='http://sarmicrosystems.in/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<b className='dark:text-hoverDark text-hoverLight'>
								SAR Software Solutions
							</b>
						</a>{' '}
					</p>
				</div>
				<div className='md:w-[25%] my-3 self-center '>
					<img
						src='https://ik.imagekit.io/rjkashyap05/portfolio/76556671_HsffWihZJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662403898954'
						alt='Rajeshwar Kashyap'
						className='w-[95%] mx-auto rounded-lg Profile-pick ease-in duration-300'
					/>
				</div>
			</div>
			<div className='md:w-[100%] my-3 self-center '>
				<div className='flex flex-row gap-12 mt-5 flex-wrap'>
					<div className='flex-1 ease-in duration-300 icon-html'>
						<TbBrandHtml5 size={55} className='mx-auto' />
						<p className='text-center'>HTML</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-css'>
						<TbBrandCss3 size={55} className='mx-auto' />
						<p className='text-center'>CSS</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-javascript'>
						<TbBrandJavascript size={55} className='mx-auto' />
						<p className='text-center'>Javascript</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-php'>
						<TbBrandPhp size={55} className='mx-auto' />
						<p className='text-center'>PHP</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-mysqli'>
						<SiMysql size={55} className='mx-auto' />
						<p className='text-center'>MySql</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-react'>
						<SiReact size={55} className='mx-auto' />
						<p className='text-center'>React</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-nextjs'>
						<TbBrandNextjs size={55} className='mx-auto' />
						<p className='text-center'>NextJs</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-codeigniter'>
						<SiCodeigniter size={55} className='mx-auto' />
						<p className='text-center'>Codeigniter</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-laravel'>
						<SiLaravel size={55} className='mx-auto' />
						<p className='text-center'>Laravel</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-nodejs'>
						<IoLogoNodejs size={55} className='mx-auto' />
						<p className='text-center'>Node Js</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-mongodb'>
						<SiMongodb size={55} className='mx-auto' />
						<p className='text-center'>MongoDB</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-react-native'>
						<TbBrandReactNative size={55} className='mx-auto' />
						<p className='text-center'>React Native</p>
					</div>
					<div className=' ease-in duration-300 icon-bootstrap'>
						<TbBrandBootstrap size={55} className='mx-auto' />
						<p className='text-center'>BootStrap</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-tailwind'>
						<TbBrandTailwind size={55} className='mx-auto' />
						<p className='text-center'>Tailwind Css</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-Materialui'>
						<SiMaterialui size={55} className='mx-auto' />
						<p className='text-center'>Material UI</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-sass'>
						<FaSass size={55} className='mx-auto' />
						<p className='text-center'>Sass</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-typescript'>
						<SiTypescript size={55} className='mx-auto ' />
						<p className='text-center'>TypeScript</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-aws'>
						<SiAmazonaws size={55} className='mx-auto ' />
						<p className='text-center'>AWS-EC2</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-npm'>
						<FaNpm size={55} className='mx-auto ' />
						<p className='text-center'>npm</p>
					</div>
					<div className='flex-1 ease-in duration-300 icon-yarn'>
						<FaYarn size={55} className='mx-auto ' />
						<p className='text-center'>yarn</p>
					</div>
				</div>
			</div>
		</div>
	);
}
