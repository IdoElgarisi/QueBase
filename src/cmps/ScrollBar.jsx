import { useEffect, useState } from "react";
import BarCounter from "./BarCounter";
import Cursor from "./Cursor";

const ScrollBar = ({ currentTime, duration }) => {
    const [cursorPos, seCursorPos] = useState(null)
    useEffect(() => { CalcCursorPos() }, [currentTime])

    const CalcCursorPos = () => {
        if (currentTime >= duration) seCursorPos(0)
        else seCursorPos(((currentTime / duration) * 100))
    }
    
    return (
        <section className="scroll-bar-wrapper">
            <section className="scroll-bar-container">
                <BarCounter />
                <Cursor cursorPos={cursorPos} />
            </section>
        </section>
    )
}
export default ScrollBar;