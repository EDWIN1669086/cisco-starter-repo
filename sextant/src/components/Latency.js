import { useState, useEffect } from 'react';

export default function Latency(){
    const [latency, setLatency] = useState(-1);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        var W3CWebSocket = require('websocket').w3cwebsocket;
        var client = new W3CWebSocket('ws://localhost:55455');

        client.onopen = function() {
            console.log('WebSocket Client Connected');
        };

        client.onclose = function() {
            console.log('echo-protocol Client Closed');
        };

        client.onmessage = function(e) {
            console.log(e);
            setLatency(e.data);
            setCurrentTime((new Date()).getTime());
        };

        return () => {
            client.close();
        }

    }, [])

    return (
        <div className="latency-container">
            Latency: {currentTime - latency} ms
        </div>
    )
}