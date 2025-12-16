import React from 'react'
import { Icon } from 'lucide-react';

function StatusCard({ title, value, subText, icon: Icon, iconBgColor,subTextColor }) {
  return (
    <div className="bg-white p-5 rounded-xl flex justify-between items-center transition-shadow hover:shadow-xl">
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="flex items-baseline mt-1">
        <span className="text-4xl font-bold text-gray-900">{value}</span>
      </div>
      {subText && (
        <p className={`text-xs mt-1 ${subTextColor || 'text-gray-500'}`}>
          {subText}
        </p>
      )}
    </div>
    <div className={`p-3 rounded-full ${iconBgColor}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    </div>
  )
}

export default StatusCard
