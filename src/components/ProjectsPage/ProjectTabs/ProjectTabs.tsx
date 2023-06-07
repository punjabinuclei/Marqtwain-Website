import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const ProjectTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 'fullWidth' }}>
                    <TabList
                        variant="fullWidth"
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            style: { backgroundColor: '#677FCF' },
                        }}
                    >
                        <Tab
                            label="Logo Designs"
                            className="font-light text-[#ffffff4d] text-opacity-30 text-2xl hover:text-white hover-underline-animation transition-delay-300"
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                                
                            }}
                            value="1"
                        />
                        <Tab
                            label="Pitch Decks"
                            className="font-light text-[#ffffff4d] text-opacity-30 text-2xl hover:text-white hover-underline-animation transition-delay-300"
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                            }}
                            value="2"
                        />
                        <Tab
                            label="Web Designs"
                            className="font-light text-[#ffffff4d] text-opacity-30 text-2xl hover:text-white hover-underline-animation transition-delay-300"
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                            }}
                            value="3"
                        />
                        <Tab
                            label="App Designs"
                            className="font-light text-[#ffffff4d] text-opacity-30 text-2xl hover:text-white hover-underline-animation transition-delay-300"
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                            }}
                            value="4"
                        />
                        <Tab
                            label="Brand Identity"
                            className="font-light text-[#ffffff4d] text-opacity-30 text-2xl hover:text-white hover-underline-animation transition-delay-300"
                            sx={{
                                '&.Mui-selected': {
                                    color: '#FFFFFF',
                                },
                            }}
                            value="5"
                        />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Thrwee</TabPanel>
                <TabPanel value="5">Item Three</TabPanel>
            </TabContext>
        </div>
    );
};

export default ProjectTabs;
