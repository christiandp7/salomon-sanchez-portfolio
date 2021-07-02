import React from 'react'
import Header from '@components/ui/Header'
import FloatinButton from '@components/ui/FloatingButton'

const MainLayout = ({ children }) => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>{children}</main>
			<FloatinButton />
		</div>
	)
}

export default MainLayout
