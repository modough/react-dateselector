import { currentMonth, currentYear } from "../utils/dateFormat";
import '../css/daysInMonth.css';
function DaysInMonth() {
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    return (
        <ul className='days'>
            {
                Array
                    .from({ length: lastDateOfMonth }, (_, i) => i + 1)
                    .map((day) =>
                        <li key={day}>{day}</li>
                    )
            }
        </ul>
    )
}

export default DaysInMonth