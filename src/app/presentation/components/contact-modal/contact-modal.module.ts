import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { ContactModalComponent } from '@components/contact-modal'
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ContactFormComponent } from './component'

@NgModule({
	declarations: [ContactFormComponent, ContactModalComponent],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModalModule, NgbModule],
	providers: [],
	exports: [ContactModalComponent],
})
export class ContactModalModule {}
