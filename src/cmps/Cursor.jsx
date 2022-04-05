import { FaPlay } from "react-icons/fa";

const Cursor = ({ cursorPos }) => {
    return (
        <div className="cursor-wrapper" >
            <div className="cursor-container flex column align-center" style={{ left: `${cursorPos}%` }}>
                <div className="pointer-container"><FaPlay className="icon" /></div>
                <div className="cursor-line flex justify-center"><div></div></div>
            </div>
        </div>
    )
}
export default Cursor;