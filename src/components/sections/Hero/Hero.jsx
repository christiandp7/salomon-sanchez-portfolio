import React from 'react'
import Image from 'next/image'
import cx from 'classnames'
import Circle from '@components/icons/Circle'
// assets
import s from './Hero.module.css'
// import salomonImg from '@images/salomon-photo.png'
import salomonImg from '@images/salomon_picture.png'
import Container from '@components/ui/Container'
import Figma from '@components/icons/Figma'
import Illustrator from '@components/icons/Illustrator'
import Photoshop from '@components/icons/Photoshop'
import Reactjs from '@components/icons/Reactjs'
import Css3 from '@components/icons/Css3'

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

			<Container>
				<div className={s.heroHeading}>
					<div className={s.heroHeadingCard}>
						<h3>Hola mi nombre es</h3>
						<h1>Salomon Sanchez</h1>
						<h5>Fullstack Designer & Frontend Developer</h5>
					</div>
				</div>

				<div className={s.heroContent}>
					<div className={s.heroContentWrapper}>
						<div className="flex justify-between items-baseline">
							<div className={s.skills}>
								<h4>Skills</h4>
								<ul className={s.skillsIcons}>
									<li>
										<Figma />
									</li>
									<li>
										<Illustrator />
									</li>
									<li>
										<Photoshop />
									</li>
									<li>
										<Reactjs />
									</li>
									<li>
										<Css3 />
									</li>
								</ul>
							</div>
							<div className={s.lastVideo}>Last video</div>
						</div>
						<div className={s.portfolio}>Recent Projects</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Hero
