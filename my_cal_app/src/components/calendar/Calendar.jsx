import { eachDayOfInterval, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek } from 'date-fns';
import React, { useEffect, useMemo, useState } from 'react';


const Calendar = () => {
  const [events,setEvents] = useState([])  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Group events by date
  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
      const eventDate = new Date(event.start);
      const dateKey = format(eventDate, 'yyyy-MM-dd');
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {});
  }, [events]);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);


    return eachDayOfInterval({
      start: calendarStart,
      end: calendarEnd
    });
  }, [currentDate]);

  const handleDateClick = (date) => {
    const dateEvents = eventsByDate[format(date, 'yyyy-MM-dd')] || [];
    if (dateEvents.length > 0) {
      setSelectedDate(date);
    }
  };

  const closeModal = () => {
    setSelectedDate(null);
  };
   
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/calendarfromtoenddate.json");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    fetchEvents();
  }, []);
    
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button 
          onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
          className="text-xl hover:bg-gray-200 rounded-full p-2"
        >
          {'<'}
        </button>
        <h2 className="text-xl font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
        <button 
          onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
          className="text-xl hover:bg-gray-200 rounded-full p-2"
        >
          {'>'}
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold bg-gray-50 p-2">{day}</div>
        ))}
        {calendarDays.map(day => {
          const formattedDate = format(day, 'yyyy-MM-dd');
          const dayEvents = eventsByDate[formattedDate] || [];
          const isCurrentMonth = isSameMonth(day, currentDate);

          return (
            <div 
              key={day.toString()} 
              className={`
                p-2 text-center relative cursor-pointer
                ${!isCurrentMonth ? 'text-gray-300' : ''}
                ${dayEvents.length > 0 ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'}
              `}
              onClick={() => handleDateClick(day)}
            >
              <span className="text-sm">{format(day, 'd')}</span>
              {isCurrentMonth && dayEvents.length > 0 && (
                <div className="absolute top-1 right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {dayEvents.length > 1 ? dayEvents.length : ''}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <EventModal 
          events={eventsByDate[format(selectedDate, 'yyyy-MM-dd')]} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};
const EventModal = ({ events, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[70%] overflow-y-auto relative">
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-900"
          >
            ×
          </button>
          <h3 className="text-xl font-semibold mb-4">
            Events on {format(new Date(events[0].start), 'dd MMMM yyyy')}
          </h3>
          {events.map((event, index) => (
            <div 
              key={index} 
              className="border-b last:border-b-0 border-gray-200 py-3"
            >
              <div className="font-bold mb-1">{event.summary}</div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  {format(new Date(event.start), 'hh:mm a')} - {format(new Date(event.end), 'hh:mm a')}
                </span>
                <span>{event.user_det.job_id.jobRequest_Title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Calendar;