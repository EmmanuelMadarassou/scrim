import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
	@Output()
	onSubmit: EventEmitter<any> = new EventEmitter()

	contactForm = new FormGroup({
		messageInput: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
	})

	submit() {
		const message = this.contactForm.get('messageInput')?.value as string
		this.onSubmit.emit(message)
	}
}
