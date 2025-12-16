import React from 'react'
import {Calendar,Users,ListChecks,Eye} from 'lucide-react'

function MomCards({ momId, title, status, date, participants, actionItems }) {
    let statusColor;
    let statusText;
    switch (status) {
        case 'Approved':
        statusColor = 'bg-green-700 text-white';
        statusText = 'Approved';
        break;
        case 'Pending Review':
        statusColor = 'bg-yellow-700 text-white';
        statusText = 'Pending Review';
        break;
        case 'Draft':
        statusColor = 'bg-gray-100 text-gray-700';
        statusText = 'Draft';
        break;
        default:
        statusColor = 'bg-gray-100 text-gray-700';
    }
    return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center transition-shadow hover:shadow-lg cursor-pointer">
      <div className="grow">
        <div className="flex items-center mb-1">
          <span className="text-sm font-semibold text-gray-600 mr-3">{momId}</span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor}`}>
            {statusText}
          </span>
        </div>
        <p className="text-lg font-semibold text-gray-800 mb-2">{title}</p>
        <div className="flex text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" /> {date}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" /> {participants} participants
          </div>
          <div className="flex items-center text-blue-600 font-medium hover:text-blue-700">
            <ListChecks className="w-4 h-4 mr-1" /> {actionItems} action items
          </div>
        </div>
      </div>
      <button className="text-gray-400 hover:text-white hover:bg-blue-600 rounded-sm p-1">
        <Eye className="w-5 h-5" />
      </button>
    </div>
  )
}

export default MomCards
