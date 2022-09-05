import '../styles/globals.scss';
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
	return (
		<div>
			<NextNProgress options={{ easing: 'ease', speed: 500 }} />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
