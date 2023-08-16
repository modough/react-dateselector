import { useState } from 'react'
import DayPicker from './src/components/DayPicker'
import PropTypes from 'prop-types'

function App({ locale = 'en-US', color = 'orange', todayBackground = 'orange' }) {
  const [clickedDate, setClickedDate] = useState({})
  return (
    <DayPicker
      todayBackground={todayBackground}
      locale={locale}
      color={color}
      clickedDate={clickedDate}
      setClickedDate={setClickedDate}
    />
  )
}
App.propTypes = {
  clickedDate: PropTypes.object,
  setClickedDate: PropTypes.func,
  locale: PropTypes.string,
  color: PropTypes.string,
  todayBackground: PropTypes.string,
}
export default App
