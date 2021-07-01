import React from 'react'
import Image from 'next/image'
import cx from 'classnames'
import Circle from '@components/icons/Circle'

// assets
import s from './Hero.module.css'
// import salomonImg from '@images/salomon-photo.png'
import salomonImg from '@images/salomon_picture.png'
import lastVideoImg from '@images/last_video.jpg'
import Container from '@components/ui/Container'
import Figma from '@components/icons/Figma'
import Illustrator from '@components/icons/Illustrator'
import Photoshop from '@components/icons/Photoshop'
import Reactjs from '@components/icons/Reactjs'
import Css3 from '@components/icons/Css3'
import { YoutubeLogo } from '@components/icons/Youtube'
import Carousel from '@components/ui/Carousel/'
import { projects } from '@data/projects'

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
						// layer="responsive"
						width={607}
						height={819}
					/>
				</div>
			</div>

			<Container className="2xl:flex 2xl:flex-col 2xl:justify-evenly 2xl:h-full">
				<div className={s.heroHeading}>
					<div className={s.heroHeadingCard}>
						<h3>Hola mi nombre es</h3>
						<h1>Salomon Sanchez</h1>
						<h5>Fullstack Designer & Frontend Developer</h5>
					</div>
				</div>

				<div className={s.heroContent}>
					<div className={s.heroContentWrapper}>
						<div className="flex-between-end 2xl:items-center 2xl:mb-6">
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
							<div className={s.lastVideo}>
								<div className="flex-between-center mb-1">
									<h4>Last Video</h4>
									<YoutubeLogo className="h-5 w-auto ml-4" />
								</div>
								<Image
									src={lastVideoImg}
									className={s.lastVideoImg}
									alt="last video"
									placeholder="blur"
									layout="responsive"
								/>
							</div>
						</div>
						<div className={s.projects}>
							<h4 className="mb-1">Recent Projects</h4>
							<Carousel items={projects} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Hero
