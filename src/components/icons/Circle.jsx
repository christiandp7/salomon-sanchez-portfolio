import React from 'react'

const Circle = ({ ...props }) => (
	<svg
		width="700"
		height="700"
		viewBox="0 0 700 700"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<circle
			cx="350"
			cy="350"
			r="350"
			fill="url(#paint0_linear)"
			fillOpacity="0.66"
		/>
		<defs>
			<linearGradient
				id="paint0_linear"
				x1="188"
				y1="527.5"
				x2="648.5"
				y2="100.5"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#FA00FF" />
				<stop offset="1" stopColor="#FA00FF" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
)

export default Circle
