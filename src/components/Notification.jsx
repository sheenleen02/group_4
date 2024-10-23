import React, { useState } from 'react';

const notificationsData = [
  { id: 1, message: 'We are pleased to inform you that a new customer has registered! Please follow up promptly by contacting.', time: 'Just now' },
  { id: 2, message: 'Hello sales Marketing Team, We have a special offer for our customers! Enjoy a 20% discount on selected.', time: '30 mins ago' },
  { id: 3, message: 'Hello sales Marketing Team, this is a reminder to achieve this month’s sales target. Currently we’ve...', time: '2 days ago' },
  { id: 4, message: 'Hello sales Marketing Team. We have received product information from a potential customer.', time: '5 days ago' },
  { id: 5, message: 'Hello sales Marketing Team. We have received product information from a potential customer.', time: '07 Sep, 2024' },
  { id: 6, message: 'Hello sales Marketing Team. A meeting or presentation has been scheduled with a customer/prospect.', time: '01 Sep, 2024' },
  { id: 7, message: 'Hello sales Marketing Team. This is a reminder to review the contract proposal currently under...', time: '28 Aug, 2024' },
  { id: 8, message: 'Hello sales Marketing Team. It’s time for a follow-up with a customer after their recent purchase/meeting.', time: '27 Aug, 2024' },
  { id: 9, message: 'Hello sales Marketing Team. We have received positive feedback/testimonial from a satisfied customer.', time: '26 Aug, 2024' },
  { id: 10, message: 'Hello sales Marketing Team. This is a reminder regarding an outstanding payment from a customer.', time: '26 Aug, 2024' },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter notifications based on search term
  const filteredNotifications = notifications.filter((notification) =>
    notification.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle deleting a notification
  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">List Notification</h2>
        <div className="text-gray-600">188 Notifications</div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <button className="bg-yellow-400 px-3 py-2 rounded">All</button>
          <button className="text-gray-600 px-3 py-2">Archive</button>
          <button className="text-gray-600 px-3 py-2">Favorite</button>
        </div>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search by Name Product"
            className="border rounded px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Notification List */}
      <div className="bg-white rounded-lg shadow p-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex items-center">
              <span className="mr-2">⭐</span>
              <p className="text-gray-800">{notification.message}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{notification.time}</span>
              <button
                className="text-red-500"
                onClick={() => handleDelete(notification.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;

