import { ChallengesRepository } from '../../src/application/repositories/ChallengesRepository'
import { Challenge } from '../../src/domain/entities/challenge'

export class InMemoryChallengesRepository implements ChallengesRepository {
  public items: Challenge[] = []

  findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find(
      (challenge) => challenge.id === id
    )

    if (!challenge) {
      return Promise.resolve(null)
    }

    return Promise.resolve(challenge)
  }
}
