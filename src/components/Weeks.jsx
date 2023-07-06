import { daysInLetter } from "../data/daysInLetter"


function Weeks() {
    return (
        <ul className='weeks'>
            {daysInLetter.map((day) => {
                return <li key={day}>{day}</li>
            })}
        </ul>
    )
}

export default Weeks