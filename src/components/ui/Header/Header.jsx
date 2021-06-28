import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Logo from '@components/icons/Logo'
import Container from '@components/ui/Container'
import s from './Header.module.css'
import { YoutubeIcon } from '@components/icons/Youtube'
import Twitter from '@components/icons/Twitter'
import GitHub from '@components/icons/GitHub'

const Header = () => {
	return (
		<nav className={s.root}>
			<Container>
				<div className={s.headerWrapper}>
					<div className={s.logo}>
						<Link href="/">
							<Logo />
						</Link>
					</div>
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
					<ul className={s.toolbar}>
						<li>
							<a href="#" className={s.socialLink}>
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
			</Container>
		</nav>
	)
}

export default Header
