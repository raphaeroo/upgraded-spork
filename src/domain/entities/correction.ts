import { Entity } from '../../core/domain/Entity'

type Props = {
  grade: number
  submissionId: string
  createAt: Date
}

export class Correction extends Entity<Props> {
  private constructor(props: Props, id?: string) {
    super(props, id)
  }

  static create(props: Props, id?: string) {
    const correction = new Correction(props, id)

    return correction
  }
}
