// app/dashboard/reports/DeliveryDashboard.tsx
'use client';

import React, { useState } from 'react';
import { FiSearch, FiCalendar, FiChevronDown, FiUpload, FiDownload, FiFileText } from 'react-icons/fi';

type Metric = {
  id: string;
  label: string;
  value: string;
};

type TabType = 'Analytics' | 'Basic Report' | 'Extended Report';
type ReportType = 'Shift Report' | 'By Order';

const DeliveryDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Analytics');
  const [selectedMetric, setSelectedMetric] = useState<string>('metric3');
  const [reportType, setReportType] = useState<ReportType>('Shift Report');

  const metrics: Metric[] = [
    { id: 'metric1', label: 'No of completed deliveries', value: 'N/A' },
    { id: 'metric2', label: 'No of pending deliveries', value: 'N/A' },
    { id: 'metric3', label: 'No of cancelled deliveries', value: 'N/A' },
    { id: 'metric4', label: 'Average delivery time', value: 'N/A' },
    { id: 'metric5', label: 'Total delivery distance', value: 'N/A' },
    { id: 'metric6', label: 'Average driver rating', value: 'N/A' },
  ];

  const timeLabels = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 || 12;
    const period = i < 12 ? 'AM' : 'PM';
    return `${hour}${period}`;
  });

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Reports</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <button className="absolute right-0 top-0 h-full px-3 flex items-center justify-center bg-red-500 rounded-r-lg text-white">
                <FiSearch />
              </button>
            </div>
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
              <FiChevronDown className="absolute right-3 top-3 text-gray-500" />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <span className="mr-2">11/06/2023 - 11/06/2023</span>
              <FiCalendar className="text-gray-500" />
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                <FiUpload />
              </button>
              <button className="p-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                <FiDownload />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div>
          <div className="flex space-x-8 border-b">
            {(['Analytics', 'Basic Report', 'Extended Report'] as TabType[]).map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-1 relative ${activeTab === tab ? 'text-red-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`p-4 rounded-lg ${metric.id === selectedMetric ? 'bg-[#D1193E]' : 'bg-[#EB9CAC]'} cursor-pointer`}
            onClick={() => setSelectedMetric(metric.id)}
          >
            <p className="text-xs text-white">{metric.label}</p>
            <p className="text-2xl text-white font-semibold mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-lg">
        {activeTab === 'Analytics' && (
          <div>
            <div className="h-64 flex items-center justify-center relative">
              {/* Grid Lines */}
              <div className="absolute inset-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-gray-100"
                    style={{ top: `${i * 25}%` }}
                  ></div>
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-0 bottom-0 w-px bg-gray-100"
                    style={{ left: `${i * (100 / 11)}%` }}
                  ></div>
                ))}
              </div>
              
              {/* X-axis */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                {timeLabels.map((time, i) => (
                  <div key={i} className="relative" style={{ left: `${i * (100 / 23)}%` }}>
                    <div className="absolute -top-2 left-0 w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">{time}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-gray-400 flex flex-col items-center">
                
                <p>No data available</p>
              </div>
            </div>
          </div>
        )}

        {(activeTab === 'Basic Report' || activeTab === 'Extended Report') && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{activeTab}</h2>
              <div className="relative">
                <select
                  className="appearance-none pl-3 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value as ReportType)}
                >
                  <option value="Shift Report">Shift Report</option>
                  <option value="By Order">By Order</option>
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-gray-500" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    {reportType === 'Shift Report' ? (
                      <>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carrier Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earliest Start Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latest End Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hour(s) Worked</th>
                      </>
                    ) : (
                      <>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pick-up From</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deliver To</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Fee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Driver Pay</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance (mile)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td colSpan={reportType === 'Shift Report' ? 4 : 11} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center text-gray-400">
                        <FiFileText className="text-4xl mb-2" />
                        <p>No data available in the table</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryDashboard;