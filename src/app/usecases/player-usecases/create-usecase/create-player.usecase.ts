import { Injectable } from '@angular/core'
import { Param } from '@core/param'
import { Result, Usecase } from '@core/types'
import { PlayerEntity } from '@entities/player'
import { IPlayerRepository } from 'app/adapter/repository/player'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class CreatePlayerUsecase implements Usecase<Param<PlayerEntity>, Observable<Result>> {
	constructor(private iPlayerRepository: IPlayerRepository) {}

	execute(param: Param<PlayerEntity>): Observable<Result> {
		//TODO: Create a new Player and return it
		return this.iPlayerRepository.createPlayer(param.payload)
	}
}
