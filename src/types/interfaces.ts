import { GameMode, GameType, MapId, PlatformId, QueueId } from 'lol-constants'
import { MatchParticipant, MatchTeam } from './match'
import { TimelineFrame, TimelineParticipant } from './matchTimeline'

export interface MatchResponse {
  metadata: MatchMetadata
  info: IMatch
}

export interface MatchMetadata {
  dataVersion: string
  matchId: string
  participants: string[]
}

export interface IMatch {
  /** Millisecond-timestamp. */
  gameCreation: number
  /** Seconds. */
  gameDuration: number
  /** Millisecond-timestamp. */
  gameEndTimestamp: number
  gameId: number
  gameMode: GameMode
  gameName: string
  /** Millisecond-timestamp. */
  gameStartTimestamp: number
  gameType: GameType
  gameVersion: string
  mapId: MapId
  participants: MatchParticipant[]
  platformId: PlatformId
  queueId: QueueId
  teams: [
    MatchTeam,
    MatchTeam,
  ]
  tournamentCode: string
}

export interface TimelineResponse {
  metadata: MatchMetadata
  info: IMatchTimeline
}

export interface IMatchTimeline {
  /** Milliseconds. */
  frameInterval: number
  frames: TimelineFrame[]
  gameId: number
  participants: TimelineParticipant[]
}
