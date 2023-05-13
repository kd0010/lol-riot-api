import { readFile } from 'fs/promises'

export async function getApiKey(): Promise<string> {
  return await readFile(`${__dirname}/../API_KEY`, { encoding: 'utf-8' })
}
