import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Result } from '@core/types'
import { PLAYER_ENDPOINT } from '@core/variables'
import { PlayerEntity } from '@entities/player'
import { IPlayerRepository } from '../IPlayer.repository'

@Injectable({ providedIn: 'root' })
export class PlayerRepository extends IPlayerRepository {
	constructor(private http: HttpClient) {
		super()
	}

	public all(): Observable<PlayerEntity[]> {
		return this.http.get<PlayerEntity[]>(`${PLAYER_ENDPOINT}`)
	}

	public createPlayer(player: PlayerEntity): Observable<Result> {
		return this.http.post<Result>(`${PLAYER_ENDPOINT}`, player)
	}

	public getPlayer(id: string): Observable<PlayerEntity> {
		return this.http.get<PlayerEntity>(`${PLAYER_ENDPOINT}?id=${id}`)
	}

	public updatePlayer(id: string, player: PlayerEntity): Observable<Result> {
		return this.http.put<Result>(`${PLAYER_ENDPOINT}?playerId=${id}`, player)
	}

	public removePlayer(id: string): Observable<Result> {
		return this.http.delete<Result>(`${PLAYER_ENDPOINT}?playerId=${id}`)
	}
}
