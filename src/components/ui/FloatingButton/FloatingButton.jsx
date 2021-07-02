import React from 'react'
import Envelope from '@components/icons/Envelope'

const FloatingButton = () => {
	return (
		<a
			href="mailto:salomonsanchez@gmail.com"
			className="w-[50px] h-[50px] shadow-xl flex-center fixed left-5 md:left-10 bottom-5 md:bottom-8  z-20 bg-white p-2 rounded-full">
			<Envelope />
		</a>
	)
}

export default FloatingButton
