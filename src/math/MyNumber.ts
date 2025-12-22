export interface MyNumber<T> {
    add(that: T): T
    sub(that: T): T
    mul(that: T): T
    div(that: T): T
    toString(): string
  }
  