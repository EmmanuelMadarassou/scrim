import { Injectable } from '@angular/core'
import { Param } from '@core/param'
import { Result, Usecase } from '@core/types'
import { PlayerEntity } from '@entities/player'
import { PlayerRequest } from '@request/player'
import { IPlayerRepository } from 'app/adapter/repository/player'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class UpdatePlayerUsecase implements Usecase<Param<PlayerRequest>, Observable<Result>> {
	constructor(private iPlayerRepository: IPlayerRepository) {}

	execute(param: Param<PlayerRequest>): Observable<Result> {
		//TODO: Create a new Player and return it
		const { id, ...player } = param.payload
		return this.iPlayerRepository.updatePlayer(id, param.payload)
	}
}
