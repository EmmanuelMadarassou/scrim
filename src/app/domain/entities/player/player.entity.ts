import { DaysOfWeek, RocketLeagueRanks } from '@core/types'

export class PlayerEntity {
	id!: string
	pseudo!: string
	gameLevel?: RocketLeagueRanks
	availability?: Record<DaysOfWeek, boolean>

	constructor(pPseudo: string, pGameLevel?: RocketLeagueRanks, pAvailability?: Record<DaysOfWeek, boolean>) {
		this.pseudo = pPseudo
		this.gameLevel = pGameLevel!
		this.availability = pAvailability!
	}

	addTimeSlot(dayToAdd: DaysOfWeek) {
		this.availability![dayToAdd] = true
	}
}
