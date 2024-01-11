import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
	selector: 'scrim-proposal',
	templateUrl: './scrim-proposal.component.html',
	styleUrls: ['./scrim-proposal.component.scss'],
})
export class ScrimProposalComponent {
	@Input()
	teamName: String = ''

	@Input()
	teamLevel: String = ''

	@Output()
	onSelection: EventEmitter<any> = new EventEmitter()

	selectScrimProposal(value: string) {
		this.onSelection.emit(value)
	}
}
