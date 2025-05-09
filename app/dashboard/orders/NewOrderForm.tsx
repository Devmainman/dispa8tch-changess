import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

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

interface NewOrderFormProps {
  onClose: () => void;
  onSave: (orderDetails: OrderDetails) => void;
}

const NewOrderForm: React.FC<NewOrderFormProps> = ({ onClose, onSave }) => {
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [pickUp, setPickUp] = useState({
    name: '',
    phone: '',
    phoneCode: '+234',
    address: '',
    time: '',
    period: 'PM'
  });
  const [deliver, setDeliver] = useState({
    name: '',
    phone: '',
    phoneCode: '+234',
    email: '',
    address: '',
    date: '',
    time: '',
    period: 'PM'
  });
  const [items, setItems] = useState<{ name: string; price: string; qty: string }[]>([{ name: '', price: '', qty: '' }]);
  const [taxRate, setTaxRate] = useState<string>('');
  const [deliveryFee, setDeliveryFee] = useState<string>('');
  const [discount, setDiscount] = useState<string>('');
  const [deliveryInstruction, setDeliveryInstruction] = useState<string>('');
  const [payment, setPayment] = useState<string>('Card');
  
  // Calculate subtotal
  const calculateSubtotal = () => {
    return items.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = parseInt(item.qty) || 0;
      return sum + (price * qty);
    }, 0);
  };
  
  const subtotal = calculateSubtotal();
  
  // Calculate tax
  const calculateTax = () => {
    const taxRateValue = parseFloat(taxRate) || 0;
    return subtotal * (taxRateValue / 100);
  };
  
  const tax = calculateTax();
  
  // Handle adding new item
  const handleAddItem = () => {
    setItems([...items, { name: '', price: '', qty: '' }]);
  };
  
  // Handle item change
  const handleItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };
  
  // Handle form submission
  const handleSubmit = () => {
    const orderDetails: OrderDetails = {
      orderNumber,
      pickUp: {
        name: pickUp.name,
        phone: `${pickUp.phoneCode} ${pickUp.phone}`,
        address: pickUp.address,
        time: pickUp.time,
        period: pickUp.period
      },
      deliver: {
        name: deliver.name,
        phone: `${deliver.phoneCode} ${deliver.phone}`,
        email: deliver.email,
        address: deliver.address,
        date: deliver.date,
        time: deliver.time,
        period: deliver.period
      },
      items,
      taxRate,
      deliveryFee,
      discount,
      deliveryInstruction,
      payment
    };
    
    onSave(orderDetails);
  };

  return (
    <div 
      className="fixed inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
    className="bg-white rounded-md shadow-lg w-full max-w-6xl max-h-screen overflow-y-auto scrollbar-thin"
    onClick={(e) => e.stopPropagation()} 
    style={{
      scrollbarWidth: 'thin', /* Firefox */
      scrollbarColor: 'rgba(203, 213, 225, 0.5) transparent', /* Firefox */
    }}
  >
    <style jsx global>{`
      /* For Webkit browsers like Chrome/Safari/Edge */
      .scrollbar-thin::-webkit-scrollbar {
        width: 6px;
      }
      
      .scrollbar-thin::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .scrollbar-thin::-webkit-scrollbar-thumb {
        background-color: rgba(203, 213, 225, 0.5);
        border-radius: 20px;
      }
      
      .scrollbar-thin::-webkit-scrollbar-thumb:hover {
        background-color: rgba(203, 213, 225, 0.8);
      }
    `}</style>
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-medium text-center flex-grow">New Order</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex">
          {/* Left Column */}
          <div className="w-1/2 p-6 border-r">
            <div className="mb-6">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Order number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your order number"
                className="w-full border border-gray-300 rounded p-2 h-10"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium mb-4">Pick-up From:</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded p-2 h-10"
                value={pickUp.name}
                onChange={(e) => setPickUp({...pickUp, name: e.target.value})}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Phone number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="+234"
                  className="w-1/6 border border-gray-300 rounded-l p-2 h-10"
                  value={pickUp.phoneCode}
                  onChange={(e) => setPickUp({...pickUp, phoneCode: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="000 000 0000"
                  className="w-5/6 border border-gray-300 border-l-0 rounded-r p-2 h-10"
                  value={pickUp.phone}
                  onChange={(e) => setPickUp({...pickUp, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter a location"
                  className="w-full border border-gray-300 rounded-l p-2 h-10"
                  value={pickUp.address}
                  onChange={(e) => setPickUp({...pickUp, address: e.target.value})}
                />
                <button className="bg-gray-100 border border-gray-300 border-l-0 rounded-r p-2 w-10 flex justify-center items-center">
                  <MapPin size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Pick-up Time
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="07:12"
                  className="w-1/2 border border-gray-300 rounded-l p-2 h-10"
                  value={pickUp.time}
                  onChange={(e) => setPickUp({...pickUp, time: e.target.value})}
                />
                <select 
                  className="w-1/2 border border-gray-300 border-l-0 rounded-r p-2 h-10 bg-white"
                  value={pickUp.period}
                  onChange={(e) => setPickUp({...pickUp, period: e.target.value})}
                >
                  <option>PM</option>
                  <option>AM</option>
                </select>
              </div>
            </div>

            <h3 className="text-lg font-medium mb-4">Deliver To:</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter customer name"
                className="w-full border border-gray-300 rounded p-2 h-10"
                value={deliver.name}
                onChange={(e) => setDeliver({...deliver, name: e.target.value})}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Phone number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="+234"
                  className="w-1/6 border border-gray-300 rounded-l p-2 h-10"
                  value={deliver.phoneCode}
                  onChange={(e) => setDeliver({...deliver, phoneCode: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="000 000 0000"
                  className="w-5/6 border border-gray-300 border-l-0 rounded-r p-2 h-10"
                  value={deliver.phone}
                  onChange={(e) => setDeliver({...deliver, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Email
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded p-2 h-10"
                value={deliver.email}
                onChange={(e) => setDeliver({...deliver, email: e.target.value})}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter a location"
                  className="w-full border border-gray-300 rounded-l p-2 h-10"
                  value={deliver.address}
                  onChange={(e) => setDeliver({...deliver, address: e.target.value})}
                />
                <button className="bg-gray-100 border border-gray-300 border-l-0 rounded-r p-2 w-10 flex justify-center items-center">
                  <MapPin size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-normal mb-1 flex items-center">
                    Delivery Date
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="06/10/2023"
                      className="w-full border border-gray-300 rounded p-2 h-10 pr-10"
                      value={deliver.date}
                      onChange={(e) => setDeliver({...deliver, date: e.target.value})}
                    />
                    <span className="absolute right-2 top-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-normal mb-1 flex items-center">
                    Delivery Time
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="07:12"
                      className="w-1/2 border border-gray-300 rounded-l p-2 h-10"
                      value={deliver.time}
                      onChange={(e) => setDeliver({...deliver, time: e.target.value})}
                    />
                    <select 
                      className="w-1/2 border border-gray-300 border-l-0 rounded-r p-2 h-10 bg-white"
                      value={deliver.period}
                      onChange={(e) => setDeliver({...deliver, period: e.target.value})}
                    >
                      <option>PM</option>
                      <option>AM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 p-6">
            <h3 className="text-lg font-medium mb-4">Order Details</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-normal mb-1">Items:</label>
              <div className="flex mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-5/12 border border-gray-300 rounded p-2 h-10 mr-2"
                  value={items[0].name}
                  onChange={(e) => handleItemChange(0, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Price"
                  className="w-4/12 border border-gray-300 rounded p-2 h-10 mx-1"
                  value={items[0].price}
                  onChange={(e) => handleItemChange(0, 'price', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Qty"
                  className="w-3/12 border border-gray-300 rounded p-2 h-10 ml-2"
                  value={items[0].qty}
                  onChange={(e) => handleItemChange(0, 'qty', e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mb-4 mt-4">
              <span className="font-normal">Subtotal:</span>
              <span className="font-normal">{subtotal.toFixed(0)}</span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1">
                Tax Rate %:
                <span className="text-gray-500 ml-1">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Enter tax rate"
                className="w-full border border-gray-300 rounded p-2 h-10"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="font-normal">Tax:</span>
              <span className="font-normal">{tax.toFixed(0)}</span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1 flex items-center">
                Delivery fees:
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter delivery fee"
                className="w-full border border-gray-300 rounded p-2 h-10"
                value={deliveryFee}
                onChange={(e) => setDeliveryFee(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-normal mb-1">
                Discount:
                <span className="text-gray-500 ml-1">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Enter discount amount"
                className="w-full border border-gray-300 rounded p-2 h-10"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div className="mb-4 mt-6">
              <label className="block text-sm font-normal mb-1">Delivery instruction:</label>
              <textarea
                placeholder="Enter delivery instruction"
                className="w-full border border-gray-300 rounded p-2 h-24"
                value={deliveryInstruction}
                onChange={(e) => setDeliveryInstruction(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <div className="w-1/2">
                  <label className="block text-sm font-normal mb-1">Payment:</label>
                  <div className="relative">
                    <select 
                      className="w-full border border-gray-300 rounded p-2 h-10 appearance-none pr-10 bg-white"
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                    >
                      <option>Card</option>
                      <option>Cash</option>
                      <option>Bank Transfer</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 pl-4 flex items-end">
                  <span className="text-red-500 text-sm font-normal">Required *</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderForm;