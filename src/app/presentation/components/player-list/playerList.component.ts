import { Component, Input } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
	standalone: true,
	imports: [ReactiveFormsModule],
	selector: 'editor',
	templateUrl: './playerList.component.html',
	styleUrls: ['./playerList.component.scss'],
})
export class EditorComponent {
	@Input()
	playerPseudo: String = ''

	@Input()
	playerGameLevel: String = ''
}
