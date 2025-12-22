import type { MyNumber } from "./MyNumber"

export class MyComplex implements MyNumber<MyComplex> {
  constructor(
    private re: number,
    private im: number
  ) {}

  add(that: MyComplex) {
    return new MyComplex(this.re + that.re, this.im + that.im)
  }

  sub(that: MyComplex) {
    return new MyComplex(this.re - that.re, this.im - that.im)
  }

  mul(that: MyComplex) {
    return new MyComplex(
      this.re * that.re - this.im * that.im,
      this.re * that.im + this.im * that.re
    )
  }

  div(that: MyComplex) {
    const d = that.re ** 2 + that.im ** 2
    return new MyComplex(
      (this.re * that.re + this.im * that.im) / d,
      (this.im * that.re - this.re * that.im) / d
    )
  }

  toString() {
    return `${this.re} + ${this.im}i`
  }
}
