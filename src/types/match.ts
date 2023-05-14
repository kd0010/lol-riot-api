import {
  ChampionId, 
  ChampionKeyNum,
  ItemKeyNum,
  Lane,
  Position,
  Role,
  TeamId,
  SpellKeyNum,
} from 'lol-constants'

export interface MatchParticipant {
  allInPings: number
  assistMePings: number
  assists: number
  baitPings: number
  baronKills: number
  basicPings: number
  bountyLevel: number
  challenges: Challenges
  champExperience: number
  champLevel: number
  championId: ChampionKeyNum
  championName: ChampionId
  championTransform: number
  commandPings: number
  consumablesPurchased: number
  damageDealtToBuildings: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  dangerPings: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  eligibleForProgression: boolean
  enemyMissingPings: number
  enemyVisionPings: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  gameEndedInEarlySurrender: boolean
  gameEndedInSurrender: boolean
  getBackPings: number
  goldEarned: number
  goldSpent: number
  holdPings: number
  individualPosition: Position
  inhibitorKills: number
  inhibitorTakedowns: number
  inhibitorsLost: number
  item0: ItemKeyNum
  item1: ItemKeyNum
  item2: ItemKeyNum
  item3: ItemKeyNum
  item4: ItemKeyNum
  item5: ItemKeyNum
  item6: ItemKeyNum
  itemsPurchased: number
  killingSprees: number
  kills: number
  lane: Lane
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  needVisionPings: number
  neutralMinionsKilled: number
  nexusKills: number
  nexusLost: number
  nexusTakedowns: number
  objectivesStolen: number
  objectivesStolenAssists: number
  onMyWayPings: number
  participantId: number
  pentaKills: number
  perks: Perks
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  profileIcon: number
  pushPings: number
  puuid: string
  quadraKills: number
  riotIdName: string
  riotIdTagline: string
  role: Role
  sightWardsBoughtInGame: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  summoner1Casts: number
  summoner1Id: SpellKeyNum
  summoner2Casts: number
  summoner2Id: SpellKeyNum
  summonerId: string
  summonerLevel: number
  summonerName: string
  teamEarlySurrendered: boolean
  teamId: TeamId
  teamPosition: Position
  timeCCingOthers: number
  timePlayed: number
  totalAllyJungleMinionsKilled: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalEnemyJungleMinionsKilled: number
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns: number
  turretsLost: number
  unrealKills: number
  visionClearedPings: number
  visionScore: number
  visionWardsBoughtInGame: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
}

export interface Challenges {
  '12AssistStreakCount': number
  abilityUses: number
  acesBefore15Minutes: number
  alliedJungleMonsterKills: number
  baronTakedowns: number
  blastConeOppositeOpponentCount: number
  bountyGold: number
  buffsStolen: number
  completeSupportQuestInTime: number
  controlWardTimeCoverageInRiverOrEnemyHalf: number
  controlWardsPlaced: number
  damagePerMinute: number
  damageTakenOnTeamPercentage: number
  dancedWithRiftHerald: number
  deathsByEnemyChamps: number
  dodgeSkillShotsSmallWindow: number
  doubleAces: number
  dragonTakedowns: number
  earlyLaningPhaseGoldExpAdvantage: number
  effectiveHealAndShielding: number
  elderDragonKillsWithOpposingSoul: number
  elderDragonMultikills: number
  enemyChampionImmobilizations: number
  enemyJungleMonsterKills: number
  epicMonsterKillsNearEnemyJungler: number
  epicMonsterKillsWithin30SecondsOfSpawn: number
  epicMonsterSteals: number
  epicMonsterStolenWithoutSmite: number
  flawlessAces: number
  fullTeamTakedown: number
  gameLength: number
  getTakedownsInAllLanesEarlyJungleAsLaner: number
  goldPerMinute: number
  hadOpenNexus: number
  immobilizeAndKillWithAlly: number
  initialBuffCount: number
  initialCrabCount: number
  jungleCsBefore10Minutes: number
  junglerTakedownsNearDamagedEpicMonster: number
  kTurretsDestroyedBeforePlatesFall: number
  kda: number
  killAfterHiddenWithAlly: number
  killParticipation: number
  killedChampTookFullTeamDamageSurvived: number
  killingSprees: number
  killsNearEnemyTurret: number
  killsOnOtherLanesEarlyJungleAsLaner: number
  killsOnRecentlyHealedByAramPack: number
  killsUnderOwnTurret: number
  killsWithHelpFromEpicMonster: number
  knockEnemyIntoTeamAndKill: number
  landSkillShotsEarlyGame: number
  laneMinionsFirst10Minutes: number
  laningPhaseGoldExpAdvantage: number
  legendaryCount: number
  lostAnInhibitor: number
  maxCsAdvantageOnLaneOpponent: number
  maxKillDeficit: number
  maxLevelLeadLaneOpponent: number
  mejaisFullStackInTime: number
  moreEnemyJungleThanOpponent: number
  multiKillOneSpell: number
  multiTurretRiftHeraldCount: number
  multikills: number
  multikillsAfterAggressiveFlash: number
  mythicItemUsed: number
  outerTurretExecutesBefore10Minutes: number
  outnumberedKills: number
  outnumberedNexusKill: number
  perfectDragonSoulsTaken: number
  perfectGame: number
  pickKillWithAlly: number
  playedChampSelectPosition: number
  poroExplosions: number
  quickCleanse: number
  quickFirstTurret: number
  quickSoloKills: number
  riftHeraldTakedowns: number
  saveAllyFromDeath: number
  scuttleCrabKills: number
  skillshotsDodged: number
  skillshotsHit: number
  snowballsHit: number
  soloBaronKills: number
  soloKills: number
  soloTurretsLategame: number
  stealthWardsPlaced: number
  survivedSingleDigitHpCount: number
  survivedThreeImmobilizesInFight: number
  takedownOnFirstTurret: number
  takedowns: number
  takedownsAfterGainingLevelAdvantage: number
  takedownsBeforeJungleMinionSpawn: number
  takedownsFirstXMinutes: number
  takedownsInAlcove: number
  takedownsInEnemyFountain: number
  teamBaronKills: number
  teamDamagePercentage: number
  teamElderDragonKills: number
  teamRiftHeraldKills: number
  threeWardsOneSweeperCount: number
  tookLargeDamageSurvived: number
  turretPlatesTaken: number
  turretTakedowns: number
  turretsTakenWithRiftHerald: number
  twentyMinionsIn3SecondsCount: number
  unseenRecalls: number
  visionScoreAdvantageLaneOpponent: number
  visionScorePerMinute: number
  wardTakedowns: number
  wardTakedownsBefore20M: number
  wardsGuarded: number
}

export interface Perks {
  statPerks: StatPerks
  styles: [
    {
      description: 'primaryStyle'
      selections: [
        PerkSelection,
        PerkSelection,
        PerkSelection,
        PerkSelection,
      ]
      style: number
    },
    {
      description: 'subStyle'
      selections: [
        PerkSelection,
        PerkSelection,
      ]
      style: number
    },
  ]
}

export interface StatPerks {
  defense: number
  flex: number
  offense: number
}

export interface PerksStyle {
  description: string
  selections: PerkSelection[]
  style: number
}

export interface PerkSelection {
  perk: number
  var1: number
  var2: number
  var3: number
}

export interface MatchTeam {
  bans: MatchBan[]
  objectives: {
    baron: MatchObjective
    champion: MatchObjective
    dragon: MatchObjective
    inhibitor: MatchObjective
    riftHerald: MatchObjective
    tower: MatchObjective
  }
  teamId: TeamId
  win: boolean
}

export interface MatchBan {
  championId: number
  pickTurn: number
}

export interface MatchObjective {
  first: boolean
  kills: number
}
