import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const BASE_URL = 'ws://localhost:3001'

const Socket = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setMessages(['test 1', 'test 2', 'test 3'])

        const newSocket = io(BASE_URL);

        newSocket.withCredentials = false;

        newSocket.on('connect', () => {
            console.log('Connected to the Socket.IO server');
        });

        newSocket.on('disconnect', () => {
            console.log('Disconnected from the Socket.IO server');
        });

        newSocket.on('sendMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        newSocket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

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