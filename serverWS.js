'use strict';

const WebSocket = require('ws');

const server = new WebSocket.Server({port: 3000});

server.on('connection', (ws) => {
    ws.on('message', (message) => { // получаем сообщение от клиента
            server.clients.forEach((client) => {
                if(client.readyState == WebSocket.OPEN){
                    client.send(message);
                };
            });
        }); // сработает, когда клиент подключиться к серверу
    ws.send('Welcome to the my chat...');
});