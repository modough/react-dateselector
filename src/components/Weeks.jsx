import { daysInLetter } from "../data/daysInLetter"
import PropTypes from 'prop-types'
import '../css/weeks.css'


function Weeks({ locale }) {
    const lang = locale.split('-')[0]

    return (
        <ul className='weeks'>
            {daysInLetter[lang].map((day) => {
                return <li key={day}>{day}</li>
            })}
        </ul>
    )
}
Weeks.propTypes = {
    locale: PropTypes.string
}
export default Weeks