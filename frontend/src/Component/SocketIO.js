import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const BASE_URL = '192.168.1.100:3001'

const Socket = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(BASE_URL);
        console.log(BASE_URL);

        newSocket.on('connect', () => {
            console.log('Connected to the Socket.IO server');
        });

        newSocket.on('disconnect', () => {
            console.log('Disconnected from the Socket.IO server');
        });

        newSocket.on('sendMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
            showNotification('Notification Title', message);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const showNotification = (title, body) => {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification(title, {
                    body: body,
                    dir: 'ltr',
                    icon: './assets/icons/icon-128x128.png',
                    image: 'https://arashaltafi.ir/arash.jpg',
                    badge: '/assets/icons/icon-128x128.png',
                    tag: 'hw1',
                    data: {
                        url: "https://arashaltafi.ir"
                    },
                    renotify: true,
                    requireInteraction: true,
                    silent: false,
                    vibrate: [200, 100, 200]
                });
            } else {
                alert("Do not have permission!")
            }
        });
    }

    const sendMessage = () => {
        if (socket) {
            socket.emit('message', newMessage);
            setNewMessage('');
        }
    };

    return (
        <div>
            <h1>Socket.IO Chat App</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
};

export default Socket;