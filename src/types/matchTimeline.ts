import {
  ItemKeyNum,
  Level,
  ParticipantId,
  TeamId,
  WardType,
  SkillSlot,
  LaneType,
  BuildingType,
  TowerType,
  KillType,
  MonsterType,
  DragonType,
} from 'lol-constants'

export interface TimelineFrame {
  events: TimelineEvent[]
  participantFrames: {
    [id in ParticipantId]: ParticipantFrame
  }
  timestamp: number
}

export interface TimelineEvent {
  type: TimelineEventType
  timestamp: number
  participantId?: number
  itemId?: ItemKeyNum
  wardType?: WardType
  killerId?: number
  levelUpType?: string
  skillSlot?: SkillSlot
  creatorId?: number
  level?: number
  position?: Coordinates
  bounty?: number
  assistingParticipantIds?: number[]
  killStreakLength?: number
  shutdownBounty?: number
  victimDamageReceived?: DamageInstance[]
  victimDamageDealt?: DamageInstance[]
  victimId?: number
  teamId?: TeamId
  laneType?: LaneType
  buildingType?: BuildingType
  towerType?: TowerType
  killType?: KillType
  afterId?: number
  beforeId?: ItemKeyNum
  goldGain?: number
  multiKillLength?: number
  killerTeamId?: number
  monsterType?: MonsterType
  monsterSubType?: MonsterSubType
  realTimestamp?: number
  actualStartTime?: number
  gameId?: number
  winningTeam?: TeamId
}

export interface Coordinates {
  x: number
  y: number
}

export interface DamageInstance {
  basic: boolean
  magicDamage: number
  name: string
  participantId: number
  physicalDamage: number
  spellName: string
  spellSlot: number
  trueDamage: number
  type: DamageInstanceType
}

export interface ParticipantFrame {
  championStats: ChampionStats
  currentGold: number
  damageStats: DamageStats
  goldPerSecond: number
  jungleMinionsKilled: number
  level: Level
  minionsKilled: number
  participantId: number
  position: Coordinates
  timeEnemySpentControlled: number
  totalGold: number
  xp: number
}

export interface ChampionStats {
  abilityHaste: number
  abilityPower: number
  armor: number
  armorPen: number
  armorPenPercent: number
  attackDamage: number
  attackSpeed: number
  bonusArmorPenPercent: number
  bonusMagicPenPercent: number
  ccReduction: number
  cooldownReduction: number
  health: number
  healthMax: number
  healthRegen: number
  lifesteal: number
  magicPen: number
  magicPenPercent: number
  magicResist: number
  movementSpeed: number
  omnivamp: number
  physicalVamp: number
  power: number
  powerMax: number
  powerRegen: number
  spellVamp: number
}

export interface DamageStats {
  magicDamageDone: number
  magicDamageDoneToChampions: number
  magicDamageTaken: number
  physicalDamageDone: number
  physicalDamageDoneToChampions: number
  physicalDamageTaken: number
  totalDamageDone: number
  totalDamageDoneToChampions: number
  totalDamageTaken: number
  trueDamageDone: number
  trueDamageDoneToChampions: number
  trueDamageTaken: number
}

export interface TimelineParticipant {
  participantId: number
  puuid: string
}

export type DamageInstanceType =
  | 'OTHER'
  | 'TOWER'
  | 'MONSTER'
  | 'MINION'

export type MonsterSubType =
  | DragonType

export type TimelineEventType =
  | 'PAUSE_END'
  | 'ITEM_PURCHASED'
  | 'ITEM_DESTROYED'
  | 'ITEM_UNDO'
  | 'SKILL_LEVEL_UP'
  | 'WARD_PLACED'
  | 'LEVEL_UP'
  | 'CHAMPION_KILL'
  | 'CHAMPION_SPECIAL_KILL'
  | 'WARD_KILL'
  | 'ITEM_SOLD'
  | 'TURRET_PLATE_DESTROYED'
  | 'ELITE_MONSTER_KILL'
  | 'BUILDING_KILL'
  | 'OBJECTIVE_BOUNTY_PRESTART'
  | 'GAME_END'
  | 'OBJECTIVE_BOUNTY_FINISH'
  | 'CHAMPION_TRANSFORM'
