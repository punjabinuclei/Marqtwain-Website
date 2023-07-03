import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import WebDesigns from './components/WebDesigns';
import AppDesigns from './components/AppDesigns';
import MotionUi from './components/MotionUi';

const ProjectTabs = () => {
    const [value, setValue] = React.useState('3'); // Set '3' for the "Web Designs" tab

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'rgba(0,0,0,0)', width: 'fullWidth' }}>
                    <TabList
                        variant="fullWidth"
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            style: { backgroundColor: '#677FCF' },
                        }}
                    >
                        <Tab
                            label="Web Designs"
                            className="font-[250] text-[#646469] text-opacity-30 text-[20px] hover:text-white hover-underline-animation transition-delay-300 "
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                            }}
                            value="3"
                        />
                        <Tab
                            label="App Designs"
                            className="font-[250] text-[#646469] text-opacity-30 text-[20px] hover:text-white hover-underline-animation transition-delay-300"
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                            }}
                            value="4"
                        />
                        <Tab
                            label="Motion UI"
                            className="font-[250] text-[#646469] text-opacity-30 text-[20px] hover:text-white hover-underline-animation transition-delay-300"
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                            }}
                            value="5"
                        />
                    </TabList>
                </Box>
                <TabPanel value="3">
                    <WebDesigns />
                </TabPanel>
                <TabPanel value="4">
                    <AppDesigns />
                </TabPanel>
                <TabPanel value="5">
                    {/* <MotionUi /> */}
                </TabPanel>
            </TabContext>
        </div>
    );
};

export default ProjectTabs;
