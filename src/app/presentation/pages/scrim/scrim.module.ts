import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { ContactModalComponent } from '@components/contact-modal'
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ScrimListComponent } from './components/scrim-list'
import { ScrimProposalComponent } from './components/scrim-proposal'
import { TimeSlotDisplayerComponent } from './components/time-slot-displayer'
import { ScrimComponent } from './scrim.component'

@NgModule({
	declarations: [ScrimComponent, ScrimListComponent, ScrimProposalComponent, TimeSlotDisplayerComponent],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModalModule, NgbModule],
	providers: [],
	exports: [ScrimComponent],
})
export class ScrimModule {}
