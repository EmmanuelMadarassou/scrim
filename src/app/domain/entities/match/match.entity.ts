import { MATCH_STATE, TEAM_SELECTOR } from '@core/types'
import { TeamEntity } from '@entities/team'

export class MatchEntity {
	state: MATCH_STATE = 'PENDING'
	day!: string
	teams!: Record<TEAM_SELECTOR, TeamEntity>
	pointsTeamA!: number
	pointsTeamB!: number

	cancelMatch() {
		this.state = 'CANCELED'
	}

	startMatch() {
		this.state = 'ON_GOING'
	}

	endMatch(pointsA: number, pointsB: number) {
		this.pointsTeamA = pointsA
		this.pointsTeamB = pointsB
		this.state = 'SETTLED'
	}

	getWinner(): TeamEntity {
		return this.pointsTeamA > this.pointsTeamB ? this.teams.A : this.teams.B
	}

	getLooser(): TeamEntity {
		return this.pointsTeamA > this.pointsTeamB ? this.teams.B : this.teams.A
	}
}
