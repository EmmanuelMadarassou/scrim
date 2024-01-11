import { Routes } from '@angular/router'
import { EditorComponent } from '@components/editor'
import { LoginComponent } from '@pages/login/login.component'
import { MessageComponent } from '@pages/message'
import { ScrimComponent } from '@pages/scrim'

const routeConfig: Routes = [
	{ path: '', component: LoginComponent, title: 'Welcome' },
	{ path: 'scrims', component: ScrimComponent, title: 'Rocket League' },
	{ path: 'player/editor', component: EditorComponent, title: 'Edit player' },
	{ path: 'message', component: MessageComponent, title: 'Messages' },
]

export default routeConfig
