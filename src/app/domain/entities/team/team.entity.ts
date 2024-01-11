import { DaysOfWeek, RocketLeagueRanks } from '@core/types'
import { ROCKET_LEAGUE_RANKS } from '@core/variables'
import { PlayerEntity } from '@entities/player'

export class TeamEntity {
	name!: string
	diminutif!: string
	players!: PlayerEntity[]
	gameLevel!: string
	availability!: Record<DaysOfWeek, boolean>

	constructor(pName: string, pDiminutif?: string, pPlayers?: PlayerEntity[]) {
		this.name = pName
		this.diminutif = pDiminutif ? pDiminutif : ''
		this.players = pPlayers ? pPlayers : []
		this.calculateLevel()
		this.calculateAvailability()
	}

	//	Calculate team game level based on players individual levels
	calculateLevel(): RocketLeagueRanks {
		let rocketLeagueRanksCounter: Record<RocketLeagueRanks, number> = this.getRocketLeagueRankFromConfig()
		if (this.players.length == 0) return 'Bronze'
		let rank: number = 0
		this.players.forEach((player: PlayerEntity) => {
			//ranksCounter[player.gameLevel] += 1
			rank += rocketLeagueRanksCounter[player.gameLevel!]
		})
		let tempTeamRank = Math.round(rank)

		const finalTeamRank = (Object.keys(rocketLeagueRanksCounter) as Array<RocketLeagueRanks>).find(
			(key) => rocketLeagueRanksCounter[key] === tempTeamRank
		)
		return finalTeamRank as RocketLeagueRanks
	}

	// Calculate team game availability based on players individual availabilities
	calculateAvailability() {
		if (this.players.length == 0) return
		let availabilityCounter: Record<DaysOfWeek, number> = this.getEveryPlayerAvailabilitiesAsNumber()
		let key: DaysOfWeek
		for (key in availabilityCounter) {
			this.availability[key] = availabilityCounter[key] == this.players.length ? true : false
		}
	}

	// Add players to the team
	addPlayer(playersToAdd: PlayerEntity[]) {
		playersToAdd.forEach((playerToAdd: PlayerEntity) => {
			this.players.push(playerToAdd)
		})
	}

	// Helper method
	// TODO: Refactor into an helper class with generic parameters
	getEveryPlayerAvailabilitiesAsNumber(): Record<DaysOfWeek, number> {
		let availabilityCounter: Record<DaysOfWeek, number> = {
			Monday: 0,
			Tuesday: 0,
			Wednesday: 0,
			Thursday: 0,
			Friday: 0,
			Saturday: 0,
			Sunday: 0,
		}
		let key: DaysOfWeek
		this.players.forEach((player: PlayerEntity) => {
			for (key in player.availability) {
				availabilityCounter[key] += player.availability![key] ? 1 : 0
			}
		})
		return availabilityCounter
	}

	// Helper method
	getRocketLeagueRankFromConfig(): Record<RocketLeagueRanks, number> {
		let rocketLeagueRanksToArray = Object.entries(ROCKET_LEAGUE_RANKS)
		const ranksName: string[] = []

		rocketLeagueRanksToArray.forEach((rank) => {
			ranksName.push(rank[0])
		})

		let index = 0
		const rocketLeagueRanksCounter: Record<string, number> = {}
		ranksName.forEach((type) => {
			rocketLeagueRanksCounter[type] = index++
		})
		return rocketLeagueRanksCounter
	}
}
