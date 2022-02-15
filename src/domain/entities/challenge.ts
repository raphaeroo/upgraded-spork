import { Entity } from '../../core/domain/Entity'

type Props = {
  title: string
  instructionsUrl: string
}

export class Challenge extends Entity<Props> {
  private constructor(props: Props, id?: string) {
    super(props, id)
  }

  static create(props: Props, id?: string) {
    const challenge = new Challenge(props, id)

    return challenge
  }
}
