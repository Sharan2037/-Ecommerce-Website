import { format } from "date-fns";
import { useState } from "react";

export default function EventPreview(props){
    const [isExpanded,setIsExpanded] = useState(false)
    const previewEvent = props.event;
    const groupedEvents = props.groupedEvents;

    function formatTime(start, end) {
        const startTime = new Date(start);
        const endTime = new Date(end);
        
        const formattedStart = format(startTime, "hh a").toUpperCase();
        const formattedEnd = format(endTime, "hh a").toUpperCase();
        
        return `${formattedStart} - ${formattedEnd}`;
    }


    return(
        <div className="flex w-full flex-col gap-2 items-center text-center bg-white border-l-12 border-blue-900 text-black relative">
            <p>{previewEvent.title}</p>
            <p>Interviewer: {previewEvent.createdBy}</p>
            <p>Time: {formatTime(previewEvent.start,previewEvent.end)}</p>


            <span className="absolute rounded-full text-sm p-2 bg-black -top-2 -right-2 text-white">{groupedEvents.length}</span>
        </div>
    )
}