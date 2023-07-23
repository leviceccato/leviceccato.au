import * as t from '#/toolkit'
import getSmartLogo from './get-smart.svg?raw'
import brookesLogo from './brookes.svg?raw'
import rxEliteLogo from './rx-elite.svg?raw'
import arcLogo from './arc.svg?raw'
import rubixLogo from './rubix.svg?raw'
import addMyLogoLogo from './add-my-logo.svg?raw'
import diceRollerLogo from './dice-roller.svg?raw'
import cityOfNewcastleLogo from './city-of-newcastle.svg?raw'
import newcastleFringeLogo from './newcastle-fringe.svg?raw'
import walkOfTheWanderingManLogo from './walk-of-the-wandering-man.svg?raw'
import arcadiaLogo from './arcadia.svg?raw'
import designWithDevLogo from './design-with-dev.svg?raw'

export const meta = {
	title: 'Logos',
	description: 'asd',
}

export default t.route(meta, () => (
	<>
		<t.H1>Logos</t.H1>
		<t.P>
			A collection of logos and marks for various commerical and non-commercial
			projects.
		</t.P>
		<t.Logo
			svg={getSmartLogo}
			padding="30%"
		/>
		<t.Logo
			svg={brookesLogo}
			padding="30%"
		/>
		<t.Logo
			svg={rxEliteLogo}
			padding="35%"
		/>
		<t.Logo
			svg={arcLogo}
			padding="38%"
		/>
		<t.Logo
			svg={rubixLogo}
			padding="37%"
		/>
		<t.Logo
			svg={addMyLogoLogo}
			padding="35%"
		/>
		<t.Logo
			svg={diceRollerLogo}
			padding="27%"
		/>
		<t.Logo
			svg={cityOfNewcastleLogo}
			padding="27%"
		/>
		<t.Logo
			svg={newcastleFringeLogo}
			padding="27%"
		/>
		<t.Logo
			svg={walkOfTheWanderingManLogo}
			padding="25%"
		/>
		<t.Logo
			svg={arcadiaLogo}
			padding="32%"
		/>
		<t.Logo
			svg={designWithDevLogo}
			padding="28%"
		/>
	</>
))
