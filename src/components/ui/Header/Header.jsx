import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Container from '@components/ui/Container'
import s from './Header.module.css'
// icons
import { YoutubeIcon } from '@components/icons/Youtube'
import Twitter from '@components/icons/Twitter'
import GitHub from '@components/icons/GitHub'
import Logo from '@components/icons/Logo'
import Menu from '@components/icons/Menu'

const Header = () => {
	return (
		<nav className={s.root}>
			<Container>
				<div className={s.headerWrapper}>
					<div className="flex-start-center w-1/6 md:hidden">
						<button className={s.menuButton}>
							<Menu />
						</button>
					</div>

					<div className="flex justify-center md:justify-start items-center w-4/6 md:w-1/6">
						<div className={s.logo}>
							<Link href="/">
								<Logo />
							</Link>
						</div>
					</div>

					<div className="flex-center hidden md:block w-4/6">
						<ul className={s.navbar}>
							<li>
								<a href="/" className={cx(s.link, s.active)}>
									Home
								</a>
							</li>
							<li>
								<a href="#" className={s.link}>
									Skills
								</a>
							</li>
							<li>
								<a href="#" className={s.link}>
									Portfolio
								</a>
							</li>
							<li>
								<a href="#" className={s.link}>
									Blog
								</a>
							</li>
							<li>
								<a href="#" className={s.link}>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className=" flex-end-center w-1/6">
						<ul className={s.socialbar}>
							<li>
								<a href="#" className={cx(s.socialLink, s.youtubeIcon)}>
									<YoutubeIcon />
								</a>
							</li>
							<li>
								<a href="#" className={s.socialLink}>
									<Twitter />
								</a>
							</li>
							<li>
								<a href="#" className={s.socialLink}>
									<GitHub />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</nav>
	)
}

export default Header
