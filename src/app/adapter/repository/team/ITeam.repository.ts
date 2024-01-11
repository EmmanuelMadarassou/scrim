import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Result } from '@core/types'

import { TeamEntity } from '@entities/team'

@Injectable({ providedIn: 'root' })
export abstract class ITeamRepository {
	abstract all(): Observable<TeamEntity[]>

	abstract createTeam(team: TeamEntity): Observable<Result>

	abstract getTeam(id: string): Observable<TeamEntity>

	abstract updateTeam(id: string, team: TeamEntity): Observable<Result>

	abstract removeTeam(id: string): Observable<Result>
}
