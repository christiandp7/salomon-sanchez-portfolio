import Head from 'next/head'
import MainLayout from '@layouts/MainLayout'
import Hero from '@components/sections/Hero'

export default function Home() {
	return (
		<>
			<Head>
				<title> Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<Hero />
			</MainLayout>
		</>
	)
}
