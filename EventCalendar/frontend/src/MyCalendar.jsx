import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
const myEventsList=[
    {
        title:"Metting",
        start: new Date(2025, 11, 12, 9, 0),
        end: new Date(2025, 11, 12, 10, 0),
    },
    {
        title:"Review",
        start: new Date(2025, 11, 10, 9, 0),
        end: new Date(2025, 11, 11, 10, 0),
        col:'green'
    },
    {
        title:"Exams",
        start: new Date(2025, 11, 18),
        end: new Date(2025, 11, 18),
        col:'red',
        detail:'Maths Examination'
    }
]
const changeColor=(event)=>{
    let bgColor=event.col || 'blue'
    return {
        style:{
            backgroundColor : bgColor,
            color: 'white', 
            borderRadius: '5px',
            border: 'none',
        },
    }
}
const showDetails=({event})=>{
    let details=event.detail || ''
    return(
        <span>
            {event.title} {details===''?'':":"} {details}
        </span>
    )
}
const MyCalendar = (props) => (
  <div className='p-8'>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    //   selectable
      style={{ height: 500 }}
      eventPropGetter={changeColor}
      components={{
        event:showDetails
      }}
    />
  </div>
)

export default MyCalendar
