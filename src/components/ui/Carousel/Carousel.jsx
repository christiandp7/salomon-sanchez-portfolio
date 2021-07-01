import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper/core'
import s from './Carousel.module.css'

// install Swiper modules
SwiperCore.use([Autoplay])

const Carousel = ({ items }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			grabCursor
			pauseonmouseenter
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

export default Carousel
