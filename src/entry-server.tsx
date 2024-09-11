// @refresh reload
import { StartServer, createHandler } from '@solidjs/start/server'

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en-AU">
				<head>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link rel="icon" href="/favicon.ico" sizes="32x32" />
					<link rel="icon" href="/icon.svg" type="image/svg+xml" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
					<link rel="manifest" href="/manifest.webmanifest" />
					<link
						rel="preload"
						as="font"
						type="font/woff2"
						crossorigin="anonymous"
						href="/fonts/interdisplay-regular.woff2"
					/>
					<link
						rel="preload"
						as="font"
						type="font/woff2"
						crossorigin="anonymous"
						href="/fonts/interdisplay-semibold.woff2"
					/>
					<title>Levi Ceccato</title>
					<meta
						name="description"
						content="I’m a multidisciplinary designer based in Townsville‚ Australia. My
						passion for design drives me to explore all of it’s avenues‚ including
						illustration‚ graphic design and software development. I’m currently
						developing"
					/>
					{assets}
				</head>
				<body>
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
))