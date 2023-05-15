import {
  IMatch,
  MatchMetadata,
  MatchResponse,
} from './types/interfaces'

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
}
