import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { RocketLeagueRanks } from '@core/types'
import { PlayerEntity } from '@entities/player'
import { PlayerInteractor } from 'app/adapter/interactor/player.interactor'

@Component({
	standalone: true,
	imports: [ReactiveFormsModule],
	selector: 'editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
	constructor(private interactor: PlayerInteractor) {}

	playerForm = new FormGroup({
		pseudoInput: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
		gameLevelInput: new FormControl('', Validators.compose([Validators.required])),
	})

	onSubmit() {
		const newPlayerPseudo = this.playerForm.get('pseudoInput')?.value as string
		const newPlayerGameLevel = this.playerForm.get('gameLevelInput')?.value as RocketLeagueRanks

		const newPlayer = new PlayerEntity(newPlayerPseudo, newPlayerGameLevel)

		this.interactor.save(newPlayer).subscribe((result) => {
			console.log(result)
		})
	}
}
