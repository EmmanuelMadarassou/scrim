import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core'

@Component({
	selector: 'contact-modal',
	templateUrl: './contact-modal.component.html',
	styleUrls: ['./contact-modal.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ContactModalComponent implements OnInit {
	@Input() public scrimSelected: string = ''

	@Output()
	onClose: EventEmitter<any> = new EventEmitter()

	@Output()
	onFormSubmit: EventEmitter<any> = new EventEmitter()

	ngOnInit() {
		console.log(this.scrimSelected)
	}

	close(closingMethod: string) {
		this.onClose.emit(closingMethod)
	}

	formSubmit(message: string) {
		this.onFormSubmit.emit(message)
	}
}
