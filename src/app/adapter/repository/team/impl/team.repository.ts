import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Result } from '@core/types'
import { TEAM_ENDPOINT } from '@core/variables'
import { TeamEntity } from '@entities/team'
import { ITeamRepository } from '../ITeam.repository'

@Injectable({ providedIn: 'root' })
export class TeamRepository extends ITeamRepository {
	constructor(private http: HttpClient) {
		super()
	}

	public all(): Observable<TeamEntity[]> {
		return this.http.get<TeamEntity[]>(`${TEAM_ENDPOINT}`)
	}

	public createTeam(team: TeamEntity): Observable<Result> {
		return this.http.post<Result>(`${TEAM_ENDPOINT}`, team)
	}

	public getTeam(id: string): Observable<TeamEntity> {
		return this.http.get<TeamEntity>(`${TEAM_ENDPOINT}?id=${id}`)
	}

	public updateTeam(id: string, team: TeamEntity): Observable<Result> {
		return this.http.put<Result>(`${TEAM_ENDPOINT}?teamId=${id}`, team)
	}

	public removeTeam(id: string): Observable<Result> {
		return this.http.delete<Result>(`${TEAM_ENDPOINT}?teamId=${id}`)
	}
}
