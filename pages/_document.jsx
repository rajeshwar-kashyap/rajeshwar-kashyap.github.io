import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name='description'
						content='I have a passion for crafting digital experiences on the internet. My journey in web development began in 2018 when I decided to create HTML pages for Google blog posts. Since then, I've honed my skills through web development courses and gained valuable experience during my first IT job at a service-based company in India. I'm currently working as a Full Frontend Developer at a startup in India.'
					/>
					<link rel='icon' href='/favicon.png' />
					<html lang='en' />
					<Script id='google-analytics' strategy='afterInteractive'>
						{`window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-PKWH4TCGB5');
        `}
					</Script>
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=G-PKWH4TCGB5'
						strategy='afterInteractive'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
