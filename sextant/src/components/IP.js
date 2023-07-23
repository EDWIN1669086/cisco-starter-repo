import { useState, useEffect } from 'react';

export default function IP({mode}){
    const [address, setAddress] = useState("");
    const isIPv4 = mode === "IPv4";

    useEffect( () => {
        async function getAddress() {
            const response = isIPv4 ? await fetch("https://api.ipify.org?format=json") : await fetch("https://api64.ipify.org?format=json");
            const address = await response.json();
            console.log(address);
            setAddress(address.ip);
        }
        getAddress();
    }, [isIPv4]);

    return (
        <div className="ip-container">
            <span style={{fontWeight: 600}}>Public {`${isIPv4 ? "IPv4" : "IPv6"} Address: `}</span>
            {address}
        </div>
    )
}