'use client';
import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Sample data for the revenue chart
  const revenueData = [
    { name: 'Jan 2023', value: 5000 },
    { name: 'Feb 2023', value: 15000 },
    { name: 'Mar 2023', value: 25000 },
    { name: 'Apr 2023', value: 20000 },
    { name: 'May 2023', value: 30000 },
    { name: 'Jun 2023', value: 25000 },
    { name: 'Jul 2023', value: 35000 },
    { name: 'Aug 2023', value: 45000 },
    { name: 'Sep 2023', value: 55000 },
    { name: 'Oct 23', value: 80000 },
  ];

  // Sample order data
  const orderData = [
    { id: '15779855', customer: 'Daniel Chiamamalu', location: 'Obinna', type: 'Food Delivery', distance: '76.43 miles', pickupTime: '5:45 p.m.', deliveryTime: '7:20 p.m.' },
    { id: '15779855', customer: 'Daniel Chiamamalu', location: 'Obinna', type: 'Food Delivery', distance: '76.43 miles', pickupTime: '5:45 p.m.', deliveryTime: '7:20 p.m.' },
    { id: '15779855', customer: 'Daniel Chiamamalu', location: 'Obinna', type: 'Food Delivery', distance: '76.43 miles', pickupTime: '5:45 p.m.', deliveryTime: '7:20 p.m.' },
  ];

  // Sample pending deliveries data
  const pendingDeliveries = [
    { id: '15779855', customer: 'Daniel Chiamamalu', location: 'Obinna', originStatus: 'Unavailable', status: 'Pending', assignStatus: 'Unassigned', amount: '$21.50' },
    { id: '15779855', customer: 'Daniel Chiamamalu', location: 'Obinna', originStatus: 'Unavailable', status: 'Pending', assignStatus: 'Unassigned', amount: '$21.50' },
    { id: '15779855', customer: 'Daniel Chiamamalu', location: 'Obinna', originStatus: 'Unavailable', status: 'Pending', assignStatus: 'Unassigned', amount: '$21.50' },
    { id: '15779855', customer: 'Daniel Chiamamalu', location: 'Obinna', originStatus: 'Unavailable', status: 'Pending', assignStatus: 'Unassigned', amount: '$21.50' },
  ];

  return (
    <div className="bg-white">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* First row of stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#1DD11963]/30 border-[1px] border-[#1DD119] rounded-lg p-4">
              <div className="text-sm text-gray-600">Total number of Orders</div>
              <div className="flex justify-between">
              <div className="text-3xl font-bold mt-2">15,347</div>
              <div className="flex justify-end">
                <div className="bg-green-500 w-15 h-15 flex items-center justify-center rounded-md">
                <img src="/images/shopping-bag.svg" className="p-2" alt="Shopping Bag" />
                </div>
              </div>

              </div>
              
            </div>
            
            <div className="bg-[#FDA8006E]/40 border-[1px] border-[#FDA800] rounded-lg p-4">
              <div className="text-sm text-gray-600">Total number of states</div>
              <div className="flex justify-between">
              <div className="text-3xl font-bold mt-2">100</div>
              <div className="flex justify-end item-center">
                <div className="bg-yellow-500 w-15 h-15 flex items-center justify-center rounded-md">
                <img src="/images/Motorbike.svg" className="p-2" alt="Shopping Bag" />

                </div>
              </div>
              </div>
            </div>
          </div>
          
          {/* Second row of stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-100 rounded-lg p-4 relative overflow-hidden">
              <div className="text-sm text-gray-600">Today's deliveries</div>
              <div className="text-3xl font-bold mt-2">1,000</div>
              <div className="absolute right-0 bottom-0">
                <div className="w-20 h-20 bg-blue-500 border-white border-[4px] rounded-full transform translate-x-1/4 translate-y-1/4"></div>
              </div>
            </div>
            
            <div className="bg-purple-100 rounded-lg p-4 relative overflow-hidden">
              <div className="text-sm text-gray-600">Completed deliveries</div>
              <div className="text-3xl font-bold mt-2">100</div>
              <div className="absolute right-0 bottom-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 border-white border-[4px] to-purple-500 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
              </div>
            </div>
            
            <div className="bg-red-100 rounded-lg p-4 relative overflow-hidden">
              <div className="text-sm text-gray-600">Assigned riders</div>
              <div className="text-3xl font-bold mt-2">576</div>
              <div className="absolute right-0 bottom-0">
                <div className="w-20 h-20 bg-gradient-to-r border-white border-[4px] from-red-500 to-orange-500 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
              </div>
            </div>
          </div>
          
          {/* Revenue Stream Chart */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Revenue Stream</h2>
              <div className="flex gap-2">
                <div className="flex items-center border rounded-md px-2 py-1">
                  <span className="mr-2">Filter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-center border rounded-md px-2 py-1">
                  <span className="mr-2">Month</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{ top: 5, right: 20, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                    domain={[0, 100000]}
                    ticks={[0, 25000, 50000, 75000, 100000]} 
                    tickFormatter={(value) => {
                      if (value === 0) return '0';
                      if (value === 25000) return '$25,000';
                      if (value === 50000) return '$50,000';
                      if (value === 75000) return '$75,000';
                      if (value === 100000) return '$100,000';
                      return '';
                    }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0088FE', 
                      color: 'white',
                      borderRadius: '4px',
                      border: 'none',
                      padding: '8px'
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                    labelFormatter={(label) => label}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0088FE" 
                    strokeWidth={3} 
                    dot={{ r: 4, strokeWidth: 2, fill: 'white' }} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="bg-white border border-black-900 rounded-lg shadow-sm p-6">
  {/* New Order */}
  <div className="mb-8 p-4 rounded-xl border border-black-700">
    <h3 className="font-semibold text-base mb-4">New Order</h3>
    
    <div className="flex justify-between text-[12px] items-center mb-4">
      <span className="text-gray-800 font-bold">16777906</span>
      <div className="flex items-center gap-2">
        <span className="text-gray-800 font-bold">$335.95</span>
        <button className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Assign
        </button>
      </div>
    </div>
    
    <div className="relative">
      {/* Line connecting location points */}
      <div className="absolute left-3 top-8 w-0.5 h-12 bg-gray-200"></div>
      
      {/* Origin location */}
      <div className="flex items-start mb-6 relative">
        <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center mr-3 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-sm">Lapalaza Hotel</div>
          <div className="text-xs text-gray-500">Lagos, Nigeria</div>
        </div>
        <div className="ml-auto text-sm font-medium">6:47 p.m.</div>
      </div>
      
      {/* Destination location */}
      <div className="flex items-start relative">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-sm">Daniel Chiamadi</div>
          <div className="text-xs text-gray-500">Imo State Owerri, Nigeria</div>
        </div>
        <div className="ml-auto text-sm font-medium">7:50 p.m.</div>
      </div>
    </div>
  </div>
  
  {/* Recent Orders */}
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-[12px] flex items-center">
        Recent Orders
        <span className="ml-2 bg-red-100 text-red-500 text-[7px] px-2 py-0.5 rounded-full">126</span>
      </h3>
      
      <div className="flex gap-2">
        <div className="border rounded px-2 py-1 text-[7px] flex items-center gap-1">
          <span>+$5,000</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="border rounded px-2 py-1 text-[7px] flex items-center gap-1">
          <span>Last 24 hrs</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="border rounded px-2 py-1 text-[7px] flex items-center gap-1">
          <span>A - Z</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
    
    <div className="overflow-x-auto whitespace-nowrap text-[12px] border-t border-b py-2 flex gap-4">
  {[1, 2, 3, 4].map((_, index) => (
    <div key={index} className="flex items-center gap-4 border-r pr-4">
      <span className="font-medium">16777908</span>
      <span>Daniel Chia...</span>
      <span>Obinze</span>
      <span>Food bask...</span>
      <span>70.43 miles</span>
      <span>6:45pm</span>
      <span>7:05pm</span>
    </div>
  ))}
</div>

    
    <div className="flex justify-center mt-4">
      <button className="text-blue-500 text-xs font-medium">View all</button>
    </div>
  </div>
  
  {/* Pending Deliveries */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-base flex items-center">
        Pending Deliveries
        <span className="ml-2 bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">50</span>
      </h3>
      <div className="border rounded px-2 py-1 text-xs flex items-center gap-1">
        <span>Unassigned</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    
    <div className="overflow-x-auto text-xs">
      <table className="w-full">
        <tbody>
          {[1, 2, 3, 4].map((_, index) => (
            <tr key={index} className={index > 0 ? "border-t" : ""}>
              <td className="py-3 font-medium">16777908</td>
              <td className="py-3">Daniel Chia...</td>
              <td className="py-3">Obinze</td>
              <td className="py-3">Umuchima</td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                  <span className="text-yellow-500 font-medium">Pending</span>
                </div>
              </td>
              <td className="py-3">Unassigned</td>
              <td className="py-3 font-medium">$31.50</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;