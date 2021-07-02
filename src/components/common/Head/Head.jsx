import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head = ({ children }) => {
	return (
		<>
			<DefaultSeo {...config} />
			<NextHead>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					type="image/png"
					href="/favicon.png"
				/>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				{children}
			</NextHead>
		</>
	)
}

export default Head
