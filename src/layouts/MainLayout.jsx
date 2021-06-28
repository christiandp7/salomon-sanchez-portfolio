import React from 'react'
import Header from '@components/ui/Header'

const MainLayout = ({ children }) => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>{children}</main>
		</div>
	)
}

export default MainLayout
