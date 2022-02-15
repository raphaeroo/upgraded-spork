import { Entity } from '../../core/domain/Entity'

type Props = {
  challengeId: string
  studentId: string
  createdAt?: Date
}

export class Submission extends Entity<Props> {
  private constructor(props: Props, id?: string) {
    super(props, id)
  }

  static create(props: Props, id?: string) {
    const submission = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date()
    }, id)

    return submission
  }
}
