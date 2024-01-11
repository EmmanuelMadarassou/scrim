import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Result } from '@core/types'
import { SCRIM_RESEARCH_ENDPOINT } from '@core/variables'
import { ScrimResearchEntity } from '@entities/scream-research'
import { IScrimResearchRepository } from '../IScrimResearch.repository'

@Injectable({ providedIn: 'root' })
export class ScrimResearchRepository extends IScrimResearchRepository {
	constructor(private http: HttpClient) {
		super()
	}

	public all(): Observable<ScrimResearchEntity[]> {
		return this.http.get<ScrimResearchEntity[]>(`${SCRIM_RESEARCH_ENDPOINT}`)
	}

	public createScrimResearch(scrimResearch: ScrimResearchEntity): Observable<Result> {
		return this.http.post<Result>(`${SCRIM_RESEARCH_ENDPOINT}`, scrimResearch)
	}

	public getScrimResearch(id: string): Observable<ScrimResearchEntity> {
		return this.http.get<ScrimResearchEntity>(`${SCRIM_RESEARCH_ENDPOINT}?id=${id}`)
	}

	public updateScrimResearch(id: string, scrimResearch: ScrimResearchEntity): Observable<Result> {
		return this.http.put<Result>(`${SCRIM_RESEARCH_ENDPOINT}?scrimResearchId=${id}`, scrimResearch)
	}

	public removeScrimResearch(id: string): Observable<Result> {
		return this.http.delete<Result>(`${SCRIM_RESEARCH_ENDPOINT}?scrimResearchId=${id}`)
	}
}
