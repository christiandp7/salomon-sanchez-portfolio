import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { YoutubeLogo } from '@components/icons/Youtube'

const LastVideo = ({ image, layout = 'intrinsic' }) => {
	return (
		<div>
			<div className="flex-start-center lg:flex-between-center mb-1">
				<h4 className="text-lg md:text-xl">Last Video</h4>
				<YoutubeLogo className="h-5 w-auto ml-4" />
			</div>
			<Link href="https://youtu.be/Gj7OyGDH0LE">
				<a target="_blank" className="block">
					<Image
						src={image}
						className="rounded-3xl w-[220px]"
						alt="last video"
						placeholder="blur"
						layout=""
						// width={220}
					/>
				</a>
			</Link>
		</div>
	)
}

export default LastVideo
