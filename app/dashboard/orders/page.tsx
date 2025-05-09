'use client'

import React, { useState } from 'react';
import { MoreHorizontal, Search, PlusCircle, XCircle } from 'lucide-react';
import NewOrderForm from './NewOrderForm';

interface OrderDetails {
  orderNumber: string;
  pickUp: {
    name: string;
    phone: string;
    address: string;
    time: string;
    period: string;
  };
  deliver: {
    name: string;
    phone: string;
    email: string;
    address: string;
    date: string;
    time: string;
    period: string;
  };
  items: Array<{
    name: string;
    price: string;
    qty: string;
  }>;
  taxRate: string;
  deliveryFee: string;
  discount: string;
  deliveryInstruction: string;
  payment: string;
}

interface Order {
  id: string;
  name: string;
  pickUp: string;
  amount: string;
  orderPlaced: string;
  pickUpReady: boolean;
  driver: string;
  status: string;
}

const OrdersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All orders');
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);
  const [orders, setOrders] = useState<Order[]>([
    { id: '18777908', name: 'Daniel Chiamadi', pickUp: 'Odaze', amount: 'NGN 334,670', orderPlaced: 'Order ID', pickUpReady: false, driver: 'Assign', status: 'Unassigned' },
    { id: '18777908', name: 'Daniel Chiamadi', pickUp: 'Odaze', amount: 'NGN 334,670', orderPlaced: 'Order ID', pickUpReady: false, driver: 'Assign', status: 'Unassigned' },
    { id: '18777908', name: 'Daniel Chiamadi', pickUp: 'Odaze', amount: 'NGN 334,670', orderPlaced: 'Order ID', pickUpReady: false, driver: 'Assign', status: 'Unassigned' },
    { id: '18777908', name: 'Daniel Chiamadi', pickUp: 'Odaze', amount: 'NGN 334,670', orderPlaced: 'Order ID', pickUpReady: false, driver: 'Assign', status: 'Unassigned' },
    { id: '18777908', name: 'Daniel Chiamadi', pickUp: 'Odaze', amount: 'NGN 334,670', orderPlaced: 'Order ID', pickUpReady: false, driver: 'Assign', status: 'Unassigned' },
    { id: '18777908', name: 'Daniel Chiamadi', pickUp: 'Odaze', amount: 'NGN 334,670', orderPlaced: 'Order ID', pickUpReady: false, driver: 'Assign', status: 'Unassigned' },
  ]);

  const tabs = [
    { name: 'All orders', count: 6 },
    { name: 'Unassigned', count: null },
    { name: 'Completed', count: null },
    { name: 'Cancelled', count: null },
    { name: 'History', count: null },
  ];

  // Filter orders based on active tab
  const filteredOrders = () => {
    switch (activeTab) {
      case 'All orders':
        return orders;
      case 'Unassigned':
        return orders.filter(order => order.status === 'Unassigned');
      case 'Completed':
        return orders.filter(order => order.status === 'Completed');
      case 'Cancelled':
        return orders.filter(order => order.status === 'Cancelled');
      case 'History':
        return []; // Empty array for demonstration
      default:
        return orders;
    }
  };

  const currentOrders = filteredOrders();

  const handleSaveOrder = (orderDetails: OrderDetails) => {
    // Create a new order from the form data
    const newOrder: Order = {
      id: orderDetails.orderNumber || `ORD${Math.floor(Math.random() * 100000)}`,
      name: orderDetails.deliver.name,
      pickUp: orderDetails.pickUp.name,
      amount: `NGN ${calculateTotalAmount(orderDetails)}`,
      orderPlaced: new Date().toLocaleDateString(),
      pickUpReady: false,
      driver: 'Assign',
      status: 'Unassigned'
    };

    // Add the new order to the orders array
    setOrders([newOrder, ...orders]);
    
    // Close the form
    setShowNewOrderForm(false);
  };

  const calculateTotalAmount = (orderDetails: OrderDetails) => {
    // Calculate subtotal
    const subtotal = orderDetails.items.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = parseInt(item.qty) || 0;
      return sum + (price * qty);
    }, 0);
    
    // Add tax if applicable
    const taxRate = parseFloat(orderDetails.taxRate) || 0;
    const tax = subtotal * (taxRate / 100);
    
    // Add delivery fee
    const deliveryFee = parseFloat(orderDetails.deliveryFee) || 0;
    
    // Subtract discount if applicable
    const discount = parseFloat(orderDetails.discount) || 0;
    
    // Calculate total
    const total = subtotal + tax + deliveryFee - discount;
    
    return total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="p- max-w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Orders</h1>
        <div className="flex justify-end gap-2 mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-2 pr-10 py-1 border rounded w-64"
            />
            <button className="absolute right-0 top-0 bottom-0 px-2 bg-red-500 rounded-r">
              <Search size={20} className="text-white" />
            </button>
          </div>
          <button 
            className="px-3 gap-1 poppins flex py-1 bg-red-500 text-white rounded"
            onClick={() => setShowNewOrderForm(true)}
          >
            <PlusCircle /> New Order
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`pb-2 px-4 mr-4 ${
              activeTab === tab.name
                ? 'border-b-2 border-red-500 text-red-500 font-medium'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {tab.count !== null && (
              <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Content based on active tab */}
      {currentOrders.length > 0 ? (
        <>
          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-left text-[#757575] bg-[#F6F6F6] border-b">
                  <th className="p-2 w-8">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="p-2">Order ID</th>
                  <th className="p-2">C. Name</th>
                  <th className="p-2">Pick-up</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Order placed</th>
                  <th className="p-2">Pick-up Ready</th>
                  <th className="p-2">Driver</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Menu</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-2">{order.id}</td>
                    <td className="p-2">{order.name}</td>
                    <td className="p-2">{order.pickUp}</td>
                    <td className="p-2">{order.amount}</td>
                    <td className="p-2">{order.orderPlaced}</td>
                    <td className="p-2">
                      <div className="relative inline-block w-10 h-5 rounded-full bg-gray-200">
                        <input 
                          type="checkbox" 
                          className="opacity-0 absolute w-full h-full cursor-pointer"
                          checked={order.pickUpReady}
                        />
                        <div className={`toggle-dot absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 transition ${order.pickUpReady ? 'transform translate-x-5' : ''}`} />
                      </div>
                    </td>
                    <td className="p-2">
                      <button className="px-2 flex items-center gap-1 py-1 bg-gray-100 rounded text-gray-600 text-sm">
                        <PlusCircle className="w-4 h-4" />
                        {order.driver}
                      </button>
                    </td>
                    <td className="p-2">
                      <button className="px-2 py-1 bg-gray-100 rounded text-gray-600 text-sm">
                        {order.status}
                      </button>
                    </td>
                    <td className="p-2">
                      <button className="text-gray-500">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer */}
          <div className="mt-4 text-right">
            <p className="font-medium">Total: {currentOrders.length}</p>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
           <div className="bg-pink-100 rounded-full p-4 mb-4">
              <XCircle size={24} className="text-pink-400" />
            </div>
          <p className="text-gray-500 text-lg">
            You currently have no pending {activeTab.toLowerCase()}...
          </p>
        </div>
      )}

      {/* New Order Form Modal */}
      {showNewOrderForm && (
        <NewOrderForm 
          onClose={() => setShowNewOrderForm(false)}
          onSave={handleSaveOrder}
        />
      )}
    </div>
  );
};

export default OrdersPage;