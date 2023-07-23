import * as t from '#/toolkit'
import getSmartUrl from './get-smart.svg'
import brookesUrl from './brookes.svg'
import rxEliteUrl from './rx-elite.svg'
import arcUrl from './arc.svg'
import rubixUrl from './rubix.svg'
import addMyLogoUrl from './add-my-logo.svg'
import diceRollerUrl from './dice-roller.svg'
import cityOfNewcastleUrl from './city-of-newcastle.svg'
import newcastleFringeUrl from './newcastle-fringe.svg'
import walkOfTheWanderingManUrl from './walk-of-the-wandering-man.svg'
import arcadiaUrl from './arcadia.svg'
import designWithDevUrl from './design-with-dev.svg'

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
			src={getSmartUrl}
			alt="Get Smart Promo logo"
			scale={0.5}
		/>
		<t.Logo
			src={brookesUrl}
			alt="Brookes Beer logo"
			scale={0.5}
		/>
		<t.Logo
			src={rxEliteUrl}
			alt="RX Elite logo"
			scale={0.5}
		/>
		<t.Logo
			src={arcUrl}
			alt="ARC logo"
			scale={0.5}
		/>
		<t.Logo
			src={rubixUrl}
			alt="Rubix logo"
			scale={0.5}
		/>
		<t.Logo
			src={addMyLogoUrl}
			alt="Add My Logo logo"
			scale={0.5}
		/>
		<t.Logo
			src={diceRollerUrl}
			alt="Dice Roller logo"
			scale={0.5}
		/>
		<t.Logo
			src={cityOfNewcastleUrl}
			alt="City of Newcastle logo"
			scale={0.5}
		/>
		<t.Logo
			src={newcastleFringeUrl}
			alt="Newcastle Fringe logo"
			scale={0.5}
		/>
		<t.Logo
			src={walkOfTheWanderingManUrl}
			alt="Walk of the Wandering Man logo"
			scale={0.5}
		/>
		<t.Logo
			src={arcadiaUrl}
			alt="Arcadia logo"
			scale={0.5}
		/>
		<t.Logo
			src={designWithDevUrl}
			alt="Design with Dev logo"
			scale={0.5}
		/>
	</>
))
