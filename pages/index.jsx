import React from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
	return (
		<ThemeProvider attribute='class'>
			<Layout>
				<Hero />
				<AboutMe />
				<WorkExperience />
			</Layout>
		</ThemeProvider>
	);
}
