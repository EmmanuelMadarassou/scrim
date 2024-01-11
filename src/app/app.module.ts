import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component'

import { ContactModalModule } from '@components/contact-modal/contact-modal.module'
import { LoginModule } from '@pages/login'
import { MessageModule } from '@pages/message/message.module'
import { ScrimModule } from '@pages/scrim/scrim.module'
import { IPlayerRepository, PlayerRepository } from './adapter/repository/player'
import routeConfig from './presentation/routes'

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(
			routeConfig,
			{ enableTracing: true } // <-- debugging purposes only
		),
		NgbModule,
		ScrimModule,
		ContactModalModule,
		MessageModule,
		LoginModule,

		HttpClientModule,
	],
	providers: [{ provide: IPlayerRepository, useClass: PlayerRepository }],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
