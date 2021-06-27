import React from 'react'

const Logo = () => {
	return (
		<svg
			width="400"
			height="400"
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M325 277C325 332.228 280.228 377 225 377H100C86.1929 377 75 365.807 75 352L75 179C75 177.895 75.8954 177 77 177L225 177C280.228 177 325 221.772 325 277Z"
				fill="url(#paint0_radial)"
			/>
			<path
				d="M75 123C75 67.7715 119.772 23 175 23H300C313.807 23 325 34.1929 325 48V221C325 222.105 324.105 223 323 223H175C119.772 223 75 178.228 75 123Z"
				fill="url(#paint1_radial)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(19.5 442) rotate(-43.5232) scale(260.655 325.819)">
					<stop stop-color="#4706D8" />
					<stop offset="1" stop-color="#DD02FA" />
				</radialGradient>
				<radialGradient
					id="paint1_radial"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(428.5 23) rotate(154.214) scale(263.21 329.012)">
					<stop stop-color="#4706D8" />
					<stop offset="1" stop-color="#DD02FA" />
				</radialGradient>
			</defs>
		</svg>
	)
}

export default Logo
