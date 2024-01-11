import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Result } from '@core/types'

import { ScrimResearchEntity } from '@entities/scream-research'

@Injectable({ providedIn: 'root' })
export abstract class IScrimResearchRepository {
	abstract all(): Observable<ScrimResearchEntity[]>

	abstract createScrimResearch(scrimResearch: ScrimResearchEntity): Observable<Result>

	abstract getScrimResearch(id: string): Observable<ScrimResearchEntity>

	abstract updateScrimResearch(id: string, scrimResearch: ScrimResearchEntity): Observable<Result>

	abstract removeScrimResearch(id: string): Observable<Result>
}
