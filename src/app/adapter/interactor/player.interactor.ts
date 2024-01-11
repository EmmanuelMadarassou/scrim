import { Injectable } from '@angular/core'
import { Param } from '@core/param'
import { Result } from '@core/types'
import { PlayerEntity } from '@entities/player'
import { PlayerRequest } from '@request/player'
import { CreatePlayerUsecase } from '@usecases/player-usecases/create-usecase'
import { GetOnePlayerUsecase } from '@usecases/player-usecases/get-usecase/get-player.usecase'
import { UpdatePlayerUsecase } from '@usecases/player-usecases/update-usecase'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class PlayerInteractor {
	constructor(
		private createPlayerUsecase: CreatePlayerUsecase,
		private getOnePlayerUsecase: GetOnePlayerUsecase,
		private updatePlayerUsecase: UpdatePlayerUsecase
	) {}

	public save(player: PlayerRequest): Observable<Result> {
		if (player.id) return this.update(player)

		return this.create(player)
	}

	public create(player: PlayerRequest): Observable<Result> {
		return this.createPlayerUsecase.execute(new Param(player))
	}

	public getOne(slug: string): Observable<PlayerEntity> {
		return this.getOnePlayerUsecase.execute(new Param(slug))
	}

	public update(player: PlayerRequest): Observable<Result> {
		return this.updatePlayerUsecase.execute(new Param(player))
	}
}
