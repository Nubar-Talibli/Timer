import { forwardRef } from "react"

const Result = forwardRef(function Result({targetTime, remaining, onReset}, ref) {

    const userLost = remaining <= 0
    const result = Math.round((1 - remaining/(targetTime*1000)) * 100)

    return (
        <dialog ref={ref} className="result-modal">
            {userLost?<h2>You Lost</h2>:<h2>You win<br/>Your result is {result}%</h2>}
            {userLost?<progress></progress>:<progress value={result} max={100}></progress>}
            <p>The target time is <strong>{targetTime}</strong> seconds.</p>
            {userLost?<p>You missed the timer.</p>:<p>You stopped the timer with <strong>{(remaining/1000).toFixed(2)}</strong> seconds left.</p>}
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default Result;