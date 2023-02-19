import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch the list of notifications from the server and set the state
    const fetchNotifications = async () => {
      const response = await fetch('/api/admin/notifications');
      const data = await response.json();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  const handleDeleteNotification = async (id) => {
    // Delete a notification with the given id
    const response = await fetch(`/api/admin/notifications/${id}`, { method: 'DELETE' });
    if (response.ok) {
      // Remove the deleted notification from the state
      setNotifications(notifications.filter((notification) => notification.id !== id));
    } else {
      console.error(`Failed to delete notification with id ${id}`);
    }
  };

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => handleDeleteNotification(notification.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
