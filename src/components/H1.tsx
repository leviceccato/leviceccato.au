import { type ParentComponent } from 'solid-js'
import { Heading } from '#/components/Heading'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
	textDecorationThicknessVar,
	textUnderlineOffsetVar,
} from '#/components/A.css'
import * as css from './H1.css'

export const H1: ParentComponent = (props) => {
	return (
		<Heading
			level="1"
			class={css.root}
			style={assignInlineVars({
				[textDecorationThicknessVar]: '3px',
				[textUnderlineOffsetVar]: '4px',
			})}
		>
			{props.children}
		</Heading>
	)
}
