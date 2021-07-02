import React from 'react'
import s from './Skills.module.css'
import Figma from '@components/icons/Figma'
import Illustrator from '@components/icons/Illustrator'
import Photoshop from '@components/icons/Photoshop'
import Reactjs from '@components/icons/Reactjs'
import Css3 from '@components/icons/Css3'

const Skills = () => {
	return (
		<div className={s.root}>
			<h4>Skills</h4>
			<ul className={s.icons}>
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
	)
}

export default Skills
