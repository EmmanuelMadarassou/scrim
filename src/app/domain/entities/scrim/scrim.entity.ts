import { SCRIM_STATE, TEAM_SELECTOR } from '@core/types'
import { MatchEntity } from '@entities/match/match.entity'
import { TeamEntity } from '@entities/team'

export class ScrimEntity {
	state: SCRIM_STATE = 'PENDING'
	day!: string
	teams!: Record<TEAM_SELECTOR, TeamEntity>
	matches!: MatchEntity[]

	plan() {
		this.state = 'PLANNED'
	}

	cancel() {
		this.state = 'CANCELLED'
	}

	start() {
		this.state = 'ON_GOING'
	}

	end(matchesPlayed: MatchEntity) {
		this.matches.concat(matchesPlayed)
		this.state = 'SETTLED'
	}

	getWinner(): TeamEntity {
		return this.teams.A
	}

	getLooser(): TeamEntity {
		return this.teams.B
	}
}
