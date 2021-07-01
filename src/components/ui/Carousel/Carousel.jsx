import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper/core'
import s from './Carousel.module.css'

// install Swiper modules
SwiperCore.use([Autoplay])

const Carousel = ({ items, breakpoints = {} }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			grabCursor
			pauseonmouseenter={false}
			breakpoints={breakpoints}
			loop
			autoplay={{ delay: 2500 }}>
			{items &&
				items.map(item => (
					<SwiperSlide key={item.title}>
						<img src={item.image} alt={item.title} className={s.image} />
					</SwiperSlide>
				))}
		</Swiper>
	)
}

Carousel.propTypes = {
	items: PropTypes.array.isRequired,
	breakpoints: PropTypes.object,
}

export default Carousel
