import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react'
import IP from '../components/IP'


import '../styles/Home.css'

export default function Home(){
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        <div style={{marginBottom: "50px",}}>
            <h1 className="home-title">The World's Leading Networking Tool</h1>
            <p className="home-subtitle">Troubleshoot your networking issues with our advanced metrics.</p>
        </div>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="IPv4 Metrics" value="1" />
                <Tab label="IPv6 Metrics" value="2" />
                <Tab label="Item Three" value="3" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <IP mode="IPv4"/>
            </TabPanel>
            <TabPanel value="2">
                <IP mode="IPv6"/>
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        </>
    )
}