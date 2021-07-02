// import Head from 'next/head'
import Head from '@components/common/Head'
import MainLayout from '@layouts/MainLayout'
import Hero from '@components/sections/Hero'

export default function Home() {
	return (
		<>
			<Head />
			<MainLayout>
				<Hero />
			</MainLayout>
		</>
	)
}
