import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Result } from '@core/types'

import { PlayerEntity } from '@entities/player'

@Injectable({ providedIn: 'root' })
export abstract class IPlayerRepository {
	abstract all(): Observable<PlayerEntity[]>

	abstract createPlayer(player: PlayerEntity): Observable<Result>

	abstract getPlayer(id: string): Observable<PlayerEntity>

	abstract updatePlayer(id: string, player: PlayerEntity): Observable<Result>

	abstract removePlayer(id: string): Observable<Result>
}
