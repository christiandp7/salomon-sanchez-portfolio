import React from 'react'
import Image from 'next/image'
import cx from 'classnames'
import Circle from '@components/icons/Circle'
// assets
import s from './Hero.module.css'
// import salomonImg from '@images/salomon-photo.png'
import salomonImg from '@images/salomon_picture.png'

const Hero = () => {
	return (
		<div className={s.root}>
			<div className={s.heroFigure}>
				<Circle className={s.circle} />
				<div className={s.heroImgWrapper}>
					<Image
						src={salomonImg}
						className={s.heroImg}
						alt="Salomon Sanchez Picture"
						// placeholder="blur"
						width={607}
						height={819}
					/>
				</div>
			</div>

			<div className={s.heroHeading}>
				<div className={s.heroHeadingCard}>
					<h3>Hola mi nombre es</h3>
					<h1>Salomon Sanchez</h1>
					<h5>Fullstack Designer & Frontend Developer</h5>
				</div>
			</div>

			<div className={s.heroContent}>
				<div className={s.heroContentWrapper}>skills / latest video</div>
			</div>
		</div>
	)
}

export default Hero
