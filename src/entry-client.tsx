// @refresh reload
import './global.css'
import { StartClient, mount } from '@solidjs/start/client'

const app = document.getElementById('app')
if (app) {
	mount(() => <StartClient />, app)
}
