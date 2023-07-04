import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../css/dayPicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CurrentDate from './CurrentDate';
import DaysInMonth from './DaysInMonth';
const DayPicker = () => {

    return (
        <div className='daypicker-wrapper'>
            <header>
                <CurrentDate />
                <div className='icons'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </header>
            <div className='calendar'>
                <ul className='weeks'>
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <DaysInMonth />
            </div>
        </div>
    );
};
export default DayPicker;