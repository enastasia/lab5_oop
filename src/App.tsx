import { useState } from "react"
import { MyFrac } from "./math/MyFrac";
import { MyComplex } from "./math/MyComplex";


type Mode = "frac" | "complex"

export default function App() {
    const [mode, setMode] = useState<Mode>("frac")

    const [a1, setA1] = useState("1")
    const [a2, setA2] = useState("3")
    const [b1, setB1] = useState("1")
    const [b2, setB2] = useState("6")

    const [resultLeft, setResultLeft] = useState("")
    const [resultRight, setResultRight] = useState("")
    const [divideResult, setDivideResult] = useState("")
    const [substractResult, setSubstractResult] = useState("")

    function calculate() {
        try {
            if (mode === "frac") {
                const a = new MyFrac(BigInt(a1), BigInt(a2))
                const b = new MyFrac(BigInt(b1), BigInt(b2))

                const left = a.add(b).mul(a.add(b))
                const right = a.mul(a).add(a.mul(b).add(a.mul(b))).add(b.mul(b))

                const divideResult = a.div(b)
                const substractResult = a.sub(b)

                setDivideResult(divideResult.toString())
                setSubstractResult(substractResult.toString())
                setResultLeft(left.toString())
                setResultRight(right.toString())
            } else {
                const a = new MyComplex(Number(a1), Number(a2))
                const b = new MyComplex(Number(b1), Number(b2))

                const left = a.add(b).mul(a.add(b))
                const right = a.mul(a).add(a.mul(b).add(a.mul(b))).add(b.mul(b))

                const divideResult = a.div(b)
                const substractResult = a.sub(b)

                setDivideResult(divideResult.toString())
                setSubstractResult(substractResult.toString())
                setResultLeft(left.toString())
                setResultRight(right.toString())
            }
        } catch (e: any) {
            alert(e.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <div
                className="
          relative w-full max-w-md p-6 rounded-2xl
          bg-white/10 backdrop-blur-xl
          border border-cyan-400/40
          shadow-[0_0_30px_rgba(34,211,238,0.35)]
        "
            >
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 bg-cyan-400 -z-10" />

                <h1 className="text-2xl font-bold text-center text-cyan-300 mb-6">
                    Перевірка формул
                </h1>

                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setMode("frac")}
                        className={`
              flex-1 py-2 rounded-lg font-medium transition
              ${
                            mode === "frac"
                                ? "bg-cyan-500 text-black shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                                : "bg-white/10 text-cyan-200 hover:bg-white/20"
                        }
            `}
                    >
                        Дроби
                    </button>

                    <button
                        onClick={() => setMode("complex")}
                        className={`
              flex-1 py-2 rounded-lg font-medium transition
              ${
                            mode === "complex"
                                ? "bg-cyan-500 text-black shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                                : "bg-white/10 text-cyan-200 hover:bg-white/20"
                        }
            `}
                    >
                        Комплексні
                    </button>
                </div>

                <div className="space-y-4 mb-6">
                    <div>
                        <p className="text-cyan-300 text-sm mb-1">a</p>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                value={a1}
                                onChange={e => setA1(e.target.value)}
                                placeholder="a₁"
                                className="neon-input"
                            />
                            <input
                                value={a2}
                                onChange={e => setA2(e.target.value)}
                                placeholder="a₂"
                                className="neon-input"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="text-cyan-300 text-sm mb-1">b</p>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                value={b1}
                                onChange={e => setB1(e.target.value)}
                                placeholder="b₁"
                                className="neon-input"
                            />
                            <input
                                value={b2}
                                onChange={e => setB2(e.target.value)}
                                placeholder="b₂"
                                className="neon-input"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={calculate}
                    className="
            w-full py-3 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-400 to-blue-500
            text-black
            shadow-[0_0_20px_rgba(34,211,238,0.7)]
            hover:scale-[1.02] transition
          "
                >
                    Обрахувати
                </button>
                {resultLeft && (
                    <div className="mt-6 space-y-3 text-cyan-100 text-sm">
                        <div className="p-3 rounded-lg bg-black/30 border border-cyan-400/30">
                            <strong className="text-cyan-300">(a + b)²:</strong> {resultLeft}
                        </div>
                        <div className="p-3 rounded-lg bg-black/30 border border-cyan-400/30">
                            <strong className="text-cyan-300">a² + 2ab + b²:</strong> {resultRight}
                        </div>
                        <div className="p-3 rounded-lg bg-black/30 border border-cyan-400/30">
                            <strong className="text-cyan-300">Результат ділення: </strong> {divideResult}
                        </div>
                        <div className="p-3 rounded-lg bg-black/30 border border-cyan-400/30">
                            <strong className="text-cyan-300">Результат віднімання: </strong> {substractResult}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}