import { Injectable } from '@angular/core'
import { Param } from '@core/param'
import { Usecase } from '@core/types'
import { TeamEntity } from '@entities/team'
import { ITeamRepository } from 'app/adapter/repository/team'

@Injectable({ providedIn: 'root' })
export class CreateTeamUsecase implements Usecase<Param<TeamEntity>, TeamEntity> {
	constructor(private iTeamRepository: ITeamRepository) {}

	execute(param: Param<TeamEntity>): TeamEntity {
		//TODO: Create a new Team and return it
		return new TeamEntity(param.payload.name)
	}
}
