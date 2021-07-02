import React, { useEffect } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import { useMediaQuery } from 'react-responsive'
// import { useMediaQuery } from 'beautiful-react-hooks'

// assets
import lastVideoImg from '@images/last_video.jpg'
import Container from '@components/ui/Container'
import LastVideo from '@components/ui/LastVideo/'
import Skills from '@components/ui/Skills/'
import Carousel from '@components/ui/Carousel/'
import { projects } from '@data/projects'
import {
	HeroFigureDesktop,
	HeroFigureMobile,
} from '@components/ui/HeroFigure/'
import s from './Hero.module.css'

const Hero = () => {
	const isDesktop = useMediaQuery({ minWidth: 1024 })
	const isTabletOrDesktop = useMediaQuery({ minWidth: 768 })

	return (
		<div className={s.root}>
			<HeroFigureDesktop />

			<Container className="lg:flex lg:flex-col lg:justify-evenly lg:h-full">
				<div className={s.heading}>
					<div className={s.card}>
						<h3>Hola mi nombre es</h3>
						<h1>Salomon Sanchez</h1>
						<h5>Fullstack Designer & Frontend Developer</h5>
					</div>
				</div>

				{isDesktop && (
					<div className={s.heroContent}>
						<div className={s.heroContentWrapper}>
							<div className={s.skillsAndVideoRow}>
								<Skills />
								<LastVideo image={lastVideoImg} link="#" />
							</div>
							<div className={s.projectsRow}>
								<h4 className="mb-1">Recent Projects</h4>
								<Carousel
									items={projects}
									spaceBetween={10}
									slidesPerView={2}
									breakpoints={{
										640: {
											slidesPerView: 2,
											spaceBetween: 20,
										},
										768: {
											slidesPerView: 3,
											spaceBetween: 40,
										},
										1024: {
											slidesPerView: 3,
											spaceBetween: 50,
										},
									}}
								/>
							</div>
						</div>
					</div>
				)}
			</Container>

			{!isDesktop && (
				<div className="flex flex-wrap items-end">
					<div className="w-[60%] md:w-[50%]">
						<HeroFigureMobile />
					</div>
					<div className="w-[40%] md:w-[50%] md:pl-8">
						<div className="max-w-[220px] mb-10">
							{isTabletOrDesktop && (
								<LastVideo image={lastVideoImg} link="#" />
							)}
						</div>
						<Skills />
					</div>
				</div>
			)}

			<Container>
				{!isDesktop && (
					<div className="mt-4">
						<div className={s.projectsRow}>
							<h4 className="mb-1">Recent Projects</h4>
							<Carousel
								items={projects}
								spaceBetween={10}
								slidesPerView={2}
								breakpoints={{
									640: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 3,
										spaceBetween: 40,
									},
									1024: {
										slidesPerView: 3,
										spaceBetween: 50,
									},
								}}
							/>
						</div>
					</div>
				)}

				{!isTabletOrDesktop && (
					<div className="mb-8">
						<LastVideo image={lastVideoImg} link="#" />
					</div>
				)}
			</Container>
		</div>
	)
}

export default Hero
