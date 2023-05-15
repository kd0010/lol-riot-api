import {
  IMatchTimeline,
  MatchMetadata,
  TimelineResponse,
} from './types/interfaces'

export class MatchTimeline {
  data: IMatchTimeline
  metadata: MatchMetadata
  raw: TimelineResponse
  constructor(
    data: TimelineResponse,
  ) {
    this.data = data.info
    this.metadata = data.metadata
    this.raw = data
  }
}
