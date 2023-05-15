import { getApiKey } from './helpers/getApiKey'
import { Region, PlatformIds } from 'lol-constants'
import { MatchResponse, TimelineResponse } from './types/interfaces'
import { Match } from './Match'
import { fetch } from 'rift-api-utils'
import { MatchTimeline } from './MatchTimeline'

class _RiotApi {
  region: Region | null = null
  #wait429: boolean = false
  #apiKey: string | null = null
  readonly #baseUriEurope = 'europe.api.riotgames.com'
  readonly #baseUriAmericas = 'americas.api.riotgames.com'
  readonly #baseUriAsia = 'asia.api.riotgames.com'
  readonly #baseUriSea = 'sea.api.riotgames.com'
  readonly #baseUriBr1 = 'br1.api.riotgames.com'
  readonly #baseUriEun1 = 'eun1.api.riotgames.com'
  readonly #baseUriEuw1 = 'euw1.api.riotgames.com'
  readonly #baseUriJp1 = 'jp1.api.riotgames.com'
  readonly #baseUriKr = 'kr.api.riotgames.com'
  readonly #baseUriLa1 = 'la1.api.riotgames.com'
  readonly #baseUriLa2 = 'la2.api.riotgames.com'
  readonly #baseUriNa1 = 'na1.api.riotgames.com'
  readonly #baseUriOc1 = 'oc1.api.riotgames.com'
  readonly #baseUriRu = 'ru.api.riotgames.com'
  readonly #baseUriTr1 = 'tr1.api.riotgames.com'
  readonly #platformUriBases: {
    [k in Region]: string
  } = {
    BR: this.#baseUriBr1,
    EUNE: this.#baseUriEun1,
    EUW: this.#baseUriEuw1,
    JP: this.#baseUriJp1,
    KR: this.#baseUriKr,
    LAN: this.#baseUriLa1,
    LAS: this.#baseUriLa2,
    NA: this.#baseUriNa1,
    OCE: this.#baseUriOc1,
    RU: this.#baseUriRu,
    TR: this.#baseUriTr1,
  }
  readonly #matchesUri = 'lol/match/v5/matches'

  async getMatch(
    gameId: number,
  ) {
    const regionalGameId = this.#getRegionalGameId(gameId)
    const match: MatchResponse = await this.#fetch(this.#getUrl(this.#matchesUri, regionalGameId))
    return new Match(match)
  }

  async getMatchTimeline(
    gameId: number,
  ) {
    const regionalGameId = this.#getRegionalGameId(gameId)
    const timeline: TimelineResponse = await this.#fetch(this.#getUrl(this.#matchesUri, regionalGameId, 'timeline'))
    return new MatchTimeline(timeline)
  }

  setRegion(
    region: Region,
  ) {
    this.region = region
  }

  #getRegionalGameId(
    gameId: number,
  ): string {
    const region = this.#validateRegion(this.region)
    return `${PlatformIds[region]}_${gameId}`
  }

  #getUrl(
    uri: string,
    ...path: string[]
  ): string {
    const region = this.#validateRegion(this.region)
    let pathSt = path.join('/')

    // match-v5 and tournament API use regional routing
    let isRegionalRouting =
      uri.includes('match/v5') ||
      false // tournament API

    let baseUri = isRegionalRouting
      ? this.#getRegionalUriBase()
      : this.#platformUriBases[region]

    return `https://${baseUri}/${uri}/${pathSt}`
  }

  #getRegionalUriBase() {
    const region = this.#validateRegion(this.region)

    switch (region) {
      case 'EUW':
      case 'EUNE':
      case 'RU':
      case 'TR':
        return this.#baseUriEurope
      case 'NA':
      case 'BR':
      case 'LAN':
      case 'LAS':
        return this.#baseUriAmericas
      case 'JP':
      case 'KR':
        return this.#baseUriAsia
      case 'OCE':
        return this.#baseUriSea
    }
  }
  
  async #wait(
    type: (
      | 'rate-limit'
      | 'service-unavailable'
    )
  ) {
    switch (type) {
      case 'rate-limit':
        this.#wait429 = true
        console.log('waiting...') // TEMP
        await new Promise(r => setTimeout(r, 120000))
        console.log('resuming') // TEMP
        this.#wait429 = false
        break
      case 'service-unavailable':
        await new Promise(r => setTimeout(r, 3000))
        break
    }
  }

  async #fetch(
    url: string,
  ): Promise<any> {
    if (this.#wait429) await this.#wait('rate-limit')
    
    const apiKey = this.#apiKey ?? (this.#apiKey = await getApiKey())

    const res = await fetch(
      url,
      {
        headers: {
          'X-Riot-Token': apiKey,
        },
        useNodeFetch: true,
      },
    )

    switch (res.status) {
      case 200:
      case 203:
        const requestCount = Number(res.headers.get('X-App-Rate-Limit-Count')?.split(',')[1]?.split(':')[0])
        console.log(requestCount) // TEMP
        if (requestCount == 100) await this.#wait('rate-limit')
        return res.data
      case 429:
        console.error('!', 429)
        await this.#wait('rate-limit')
        return this.#fetch(url)
      case 503:
        await this.#wait('service-unavailable')
        return this.#fetch(url)
      default:
        throw `status ${res.status}; url ${url}`
    }
  }

  #validateRegion(
    region: Region | null,
  ): Region {
    if (region == null) throw 'have to set region first'
    return region
  }
}

export const RiotApi = new _RiotApi()
