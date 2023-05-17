import { ChampionId } from 'lol-constants'
import {
  IMatch,
  MatchMetadata,
  MatchResponse,
} from './types/interfaces'
import { MatchParticipant } from './types/match'

export class Match {
  data: IMatch
  metadata: MatchMetadata
  raw: MatchResponse
  constructor(
    data: MatchResponse,
  ) {
    this.data = data.info
    this.metadata = data.metadata
    this.raw = data
  }

  getChampionIdBySummonerName(
    summonerName: string,
  ): ChampionId | null {
    for (const {
      championName,
      summonerName: summName,
    } of this.data.participants) {
      if (summName != summonerName) continue
      return championName
    }
    return null
  }

  getParticipantBySummonerName(
    summonerName: string,
  ): MatchParticipant | null {
    for (const participant of this.data.participants) {
      if (participant.summonerName != summonerName) continue
      return participant
    }
    return null
  }
}
