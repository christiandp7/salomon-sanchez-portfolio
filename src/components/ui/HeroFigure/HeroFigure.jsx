import React from 'react'
import Image from 'next/image'
import Circle from '@components/icons/Circle'
import CircleMobile from '@components/icons/CircleMobile'
import s from './HeroFigure.module.css'
import salomonImg from '@images/salomon_picture.png'

export const HeroFigureDesktop = () => {
	return (
		<div className={s.figureDesktop}>
			<Circle className={s.circleDsk} />
			<div className={s.imageWrapperDsk}>
				<Image
					src={salomonImg}
					alt="Salomon Sanchez Picture"
					placeholder="blur"
					// layer="responsive"
					width={607}
					height={819}
				/>
			</div>
		</div>
	)
}

export const HeroFigureMobile = () => {
	return (
		<div className={s.figureMobile}>
			<CircleMobile id="circle-mobile" className={s.circleMbl} />
			<div className={s.imageWrapperMbl}>
				<Image
					src={salomonImg}
					alt="Salomon Sanchez Picture"
					placeholder="blur"
					// layer="responsive"
					width={607}
					height={819}
				/>
			</div>
		</div>
	)
}
