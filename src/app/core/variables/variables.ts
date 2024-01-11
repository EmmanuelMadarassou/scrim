export let JSON_SERVER_ADDR: string = 'http://localhost:3000'
export let PLAYER_ENDPOINT: string = JSON_SERVER_ADDR + '/player'
export let TEAM_ENDPOINT: string = JSON_SERVER_ADDR + '/team'
export let TIME_SLOT_ENDPOINT: string = JSON_SERVER_ADDR + '/timeSlot'
export let SCRIM_RESEARCH_ENDPOINT: string = JSON_SERVER_ADDR + '/scrimResearch'

export let ROCKET_LEAGUE_RANKS: Object = {
	Bronze: {
		name: 'Bronze',
		color: 'Brown',
	},
	Silver: {
		name: 'Silver',
		color: 'Grey',
	},
	Gold: {
		name: 'Godl',
		color: 'Yellow',
	},
	Platine: {
		name: 'Platine',
		color: 'Blue',
	},
	Diamond: {
		name: 'Diamon',
		color: 'Dark blue',
	},
	Champion: {
		name: 'Champion',
		color: 'pink',
	},
	GC: {
		name: 'Grand Champion',
		color: 'red',
	},
	SSL: {
		name: 'Super Sonic Legend',
		color: 'white',
	},
}
