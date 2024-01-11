import { Component, EventEmitter, Output } from '@angular/core'

@Component({
	selector: 'scrim-list',
	templateUrl: './scrim-list.component.html',
	styleUrls: ['./scrim-list.component.scss'],
})
export class ScrimListComponent {
	@Output()
	onElementSelection: EventEmitter<any> = new EventEmitter()

	teamName = 'Only Hope'
	teamLevel = 'Champion'
	choosenScrim = ''

	selectElement(value: string) {
		this.onElementSelection.emit(value)
	}
}
