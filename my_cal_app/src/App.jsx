
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Calendar from './components/calendar/Calendar'
import CalendarComponent from './components/calendar/CalendarComponent'
import EventForm from './components/calendar/EventForm'

function App() {
  
  return (
    <BrowserRouter className='flex flex-col w-full h-screen'>
      <Routes>
        <Route path='/' element={<CalendarComponent/>}/>
        <Route path='/new-event' element={<EventForm/>}/>
        <Route path='/dummy' element={<Calendar/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
