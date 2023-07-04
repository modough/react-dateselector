import { month, year } from "../utils/dateFormat";
function DaysInMonth() {
    let lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    let daysLiTag = '';
    for (let i = 1; i <= lastDateOfMonth; i++) {
        daysLiTag += `<li>${i}</li>`;
    }

    return (
        <ul className='days' dangerouslySetInnerHTML={{ __html: daysLiTag }}>
        </ul>
    )
}

export default DaysInMonth