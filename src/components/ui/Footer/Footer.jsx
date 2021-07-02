import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<p className="text-base text-center py-3 font-normal">
			coded with 💙 by{' '}
			<Link href="https://github.com/christiandp7">
				<a
					className="text-salomonCyan font-semibold"
					target="_blank"
					rel="noreferrer">
					christiandp7
				</a>
			</Link>
		</p>
	)
}

export default Footer
