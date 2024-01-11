import { ROCKET_LEAGUE_RANKS } from '@core/variables'

export interface Result {
	acknowledged: boolean
	insertedId?: string
}

export interface Usecase<T, R> {
	execute(param: T): R
}

export type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

export type RocketLeagueRanks = 'Bronze' | 'Silver' | 'Gold' | 'Diamond' | 'Champion' | 'GC' | 'SSL'

var rocketLeagueRanksAsArray = Object.entries(ROCKET_LEAGUE_RANKS)
const ranksName: string[] = []
rocketLeagueRanksAsArray.forEach((rank) => {
	ranksName.push(rank[0])
})

export type NewRocketLeagueRanks = (typeof ranksName)[]

export type MATCH_STATE = 'PENDING' | 'CANCELED' | 'ON_GOING' | 'SETTLED'

export type TEAM_SELECTOR = 'A' | 'B'

export type SCRIM_STATE = 'PENDING' | 'PLANNED' | 'CANCELLED' | 'ON_GOING' | 'SETTLED'
