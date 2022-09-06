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
						content='Rajeshwar Kashyap is a FullStack Developer who specializes in building (and occasionally designing) exceptional digital experiences.'
					/>
					<link rel='icon' href='/favicon.png' />
					<html lang='en' />
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
