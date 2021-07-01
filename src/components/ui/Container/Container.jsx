import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Container = ({ children, className, el = 'div' }) => {
	let ComponentEl = el
	return (
		<ComponentEl
			className={cx(className, 'mx-auto w-full max-w-7xl px-6')}>
			{children}
		</ComponentEl>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.any,
	el: PropTypes.string,
}

export default Container
