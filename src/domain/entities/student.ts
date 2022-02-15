import { Entity } from '../../core/domain/Entity'

type Props = {
  name: string
  email: string
}

export class Student extends Entity<Props> {
  private constructor(props: Props, id?: string) {
    super(props, id)
  }

  static create(props: Props, id?: string) {
    const student = new Student(props, id)

    return student
  }
}
