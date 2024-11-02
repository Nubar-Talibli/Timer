import {useRef, useState } from "react"
import Result from "./Result"

export default function Timer({title, targetTime}) {

    const timer = useRef()
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)
    const isActive = timeRemaining > 0 && timeRemaining < targetTime*1000

    function handleStart() {
        timer.current = setInterval(()=>{
            setTimeRemaining((prev) => prev-10)
        },10)
    }

    function handleStop() {
        clearInterval(timer.current)
        dialog.current.showModal()
    }

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.showModal()
    }

    function resetTimer() {
        setTimeRemaining(targetTime*1000)
    }

    return (
        <>
        <Result ref={dialog} targetTime={targetTime} remaining={timeRemaining} onReset={resetTimer}></Result>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime>1?"s":""}</p>
            <button onClick={isActive?handleStop:handleStart}>{isActive?"Stop":"Start"} Challenge</button>
            <p className="active">{isActive?"Time is running":"Timer is inactive"}</p>
        </section>
        </>
    )
}