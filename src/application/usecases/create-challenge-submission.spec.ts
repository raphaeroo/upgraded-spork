/* eslint-disable no-undef */
import { InMemoryChallengesRepository } from '../../../tests/repositories/in-memory-challenges-repository'
import { InMemoryStudentsRepository } from '../../../tests/repositories/in-memory-students-repository'
import { Challenge } from '../../domain/entities/challenge'
import { Student } from '../../domain/entities/student'
import { CreateChallengeSubmission } from './create-challenge-submission'

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentsRepository()
    const challengesRepository = new InMemoryChallengesRepository()

    const student = Student.create({
      name: 'Raphael',
      email: 'teste@eu.com'
    })

    const challenge = Challenge.create({
      title: 'Challenge 1',
      instructionsUrl: 'https://hawks.com.br'
    })

    studentsRepository.items.push(student)
    challengesRepository.items.push(challenge)

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    )

    const response = await sut.run({
      studentId: student.id,
      challengeId: challenge.id
    })

    expect(response).toBeTruthy()
  })
})
