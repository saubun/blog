import { AppProps } from 'next/app';
import '../styles/global.scss';
import Layout from '../components/Layout';
import '../styles/prism.css';
import Prism from 'prismjs';

export default function MyApp({ Component, pageProps }: AppProps) {
	if (process.browser) {
		Prism.highlightAll();
	}
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
