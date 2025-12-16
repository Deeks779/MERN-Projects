import React, { useState } from 'react'
import StatusCard from '../components/StatusCard'
import { FileText, CheckCircle, Clock, Info, Download } from 'lucide-react';
import MomCards from '../components/MomCards';

function Dashboard() {
    const [isActive,setActive]=useState('prepare')
    const actionItemsByStatus = [
        { name: 'Pending Response', value: 15, col:'text-orange-500' },
        { name: 'SMU Review', value: 10, col:'text-blue-500' },
        { name: 'Overdue', value: 8, col:'text-red-500' },
        { name: 'Closed & Monitored', value: 12, col:'text-green-500' },
    ];

    const itemsByFunctionalWing = [
        { name: 'IT Security', value: 8 },
        { name: 'Audit', value: 12 },
        { name: 'Training', value: 9 },
        { name: 'Procurement', value: 6 },
    ];
  return (
    <div className='bg-gray-50 pl-11 pr-7 pt-5'>
      <div className='flex justify-between pb-2'>
        <div className='flex flex-col cursor-auto'>
            <h1 className='font-bold text-xl'>Summary Dashboard</h1>
            <span className='text-gray-500 text-xs'>Monitoring and Control Center</span>
        </div>
        <button type='button' className='flex gap-2 items-center justify-center p-2 bg-blue-800 rounded-md text-white cursor-pointer text-sm'><Download className='stroke-1'/> Export Dashboard</button>
      </div>
      <div className="flex bg-gray-100 p-1 m-2  justify-between rounded-sm shadow-inner w-101 mb-6">
        <button
          onClick={() => setActive('prepare')}
          className={`px-6 py-2 text-sm font-medium rounded-sm transition-all ${
            isActive === 'prepare'
              ? 'bg-white text-gray-600 shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          MoM Preparation/Approval
        </button>
        <button
          onClick={() => setActive('action')}
          className={`px-6 py-2 text-sm font-medium rounded-sm transition-all ${
            isActive === 'action'
              ? 'bg-white text-gray-600 shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Action Item Review
        </button>
      </div>
      <div>
         {/* MoM Preparation/Approval */}
        {isActive=='prepare' && (
          <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatusCard
              title="Total MoMs"
              value="24"
              subText="+3 this month"
              icon={FileText}
              iconBgColor="bg-blue-500"
              subTextColor="text-green-500"

            />
            <StatusCard
              title="Approved"
              value="18"
              icon={CheckCircle}
              iconBgColor="bg-green-500"
            />
            <StatusCard
              title="Pending Approval"
              value="4"
              icon={Clock}
              iconBgColor="bg-yellow-500"
            />
            <StatusCard
              title="In Review"
              value="2"
              icon={Info}
              iconBgColor="bg-sky-500"
            />
          </div>
          <div className="mt-8 bg-white p-2 border rounded-xl border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Minutes of Meeting</h2>
            <p className="text-sm text-gray-500 mb-4">Latest MoM documents and their status</p>
            <div className="space-y-4 m-2">
              <MomCards
                momId="MOM-2024-001" 
                title="CAG Meeting with DAls - Q1 Review"
                status="Approved"
                date="15/01/2024"
                participants={12}
                actionItems={5}
              />
              <MomCards
                momId="MOM-2024-002"
                title="Senior Management Retreat"
                status="Pending Review"
                date="20/01/2024"
                participants={8}
                actionItems={3}
              />
              <MomCards
                momId="MOM-2024-003"
                title="31st Accountants' General Conference"
                status="Draft"
                date="25/01/2024"
                participants={25}
                actionItems={12}
              />
            </div>
          </div>
          </>
        )}
         {/* Action Item Review */}
        {
          isActive=='action' &&(
            <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatusCard
                    title="Pending Action Items"
                    value="47"
                    subText="+5 this week"
                    icon={FileText}
                    iconBgColor="bg-orange-500"
                    subTextColor="text-red-500"
                />
                <StatusCard
                    title="Settled Items"
                    value="28"
                    icon={CheckCircle}
                    iconBgColor="bg-green-500"
                />
                <StatusCard
                    title="Overdue Items"
                    value="8"
                    icon={Clock}
                    iconBgColor="bg-yellow-500"
                />
                <StatusCard
                    title="Closed & Monitored"
                    value="12"
                    icon={Info}
                    iconBgColor="bg-sky-500"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
              <h3 className="text-xl font-bold text-gray-800">Action Items by Status</h3>
              <p className="text-sm text-gray-500 mb-4">Distribution of current action items</p>
              <div className="space-y-3">
                {actionItemsByStatus.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-gray-50 last:border-b-0">
                    <span className="text-base text-gray-700">{item.name}</span>
                    <span className={`text-lg font-semibold ${item.col}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 border rounded-xl border-gray-200 shadow-lg h-full">
              <h3 className="text-xl font-bold text-gray-800">Action Items by Status</h3>
              <p className="text-sm text-gray-500 mb-4">Distribution of current action items</p>
              <div className="space-y-3">
                {itemsByFunctionalWing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-gray-50 last:border-b-0">
                    <span className="text-base text-gray-700">{item.name}</span>
                    <span className="text-lg font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Dashboard
