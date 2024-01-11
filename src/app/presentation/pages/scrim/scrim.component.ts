import { Component } from '@angular/core'
import { ContactModalComponent } from '@components/contact-modal'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
	selector: 'rl-welcome',
	templateUrl: './scrim.component.html',
	styleUrls: ['./scrim.component.scss', '../shared.scss'],
})
export class ScrimComponent {
	constructor(private modalService: NgbModal) {}

	openContactModal(team: string) {
		const modalRef = this.modalService.open(ContactModalComponent, {
			backdropClass: 'modal-backdrop',
			centered: true,
		})
		modalRef.componentInstance.scrimSelected = team
		modalRef.componentInstance.onClose.subscribe((closingMethod: string) => {
			this.onModalClose(closingMethod)
			modalRef.close(closingMethod)
		})
		modalRef.componentInstance.onFormSubmit.subscribe((message: string) => {
			this.onModalSubmit(message)
			modalRef.close('Submit')
		})
	}

	onModalClose(closingMethod: string) {
		console.log('close modal by ' + closingMethod)
	}

	onModalSubmit(message: string) {
		console.log('submit modal with messsage: ' + message)
	}
}
