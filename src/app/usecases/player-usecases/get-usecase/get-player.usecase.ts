import { Injectable } from '@angular/core'
import { Param } from '@core/param'
import { Usecase } from '@core/types'
import { PlayerEntity } from '@entities/player'
import { IPlayerRepository } from 'app/adapter/repository/player'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class GetOnePlayerUsecase implements Usecase<Param<string>, Observable<PlayerEntity>> {
	constructor(private iPlayerRepository: IPlayerRepository) {}

	execute(param: Param<string>): Observable<PlayerEntity> {
		//TODO: Create a new Player and return it
		return this.iPlayerRepository.getPlayer(param.payload)
	}
}
