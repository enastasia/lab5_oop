import type { MyNumber } from "./MyNumber"

export class MyFrac implements MyNumber<MyFrac> {
  constructor(
    private nom: bigint,
    private denom: bigint
  ) {
    if (denom === 0n) throw new Error("Не може бути нулем")
    if (denom < 0n) {
      this.nom = -this.nom
      this.denom = -this.denom
    }
    const g = MyFrac.gcd(this.nom, this.denom)
    this.nom /= g
    this.denom /= g
  }

  private static gcd(a: bigint, b: bigint): bigint {
    a = a < 0n ? -a : a
    b = b < 0n ? -b : b
    while (b !== 0n) {
      const t = b
      b = a % b
      a = t
    }
    return a
  }

  add(that: MyFrac) {
    return new MyFrac(
      this.nom * that.denom + that.nom * this.denom,
      this.denom * that.denom
    )
  }

  sub(that: MyFrac) {
    return new MyFrac(
      this.nom * that.denom - that.nom * this.denom,
      this.denom * that.denom
    )
  }

  mul(that: MyFrac) {
    return new MyFrac(this.nom * that.nom, this.denom * that.denom)
  }

  div(that: MyFrac) {
    return new MyFrac(this.nom * that.denom, this.denom * that.nom)
  }

  toString() {
    return `${this.nom}/${this.denom}`
  }
}
