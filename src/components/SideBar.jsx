import { Box, Switch } from "@mui/material";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import { AccountBox, Home, ModeNight, People, Person, Settings, Storefront } from "@mui/icons-material";


const SideBar = ({mode, setMode}) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="HomePage" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Groups">
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Marketplace">
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Friends">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Settings">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#profile">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch onClick={() => {mode === "light"? setMode("dark"): setMode("light")}} />
                    </ListItemButton>
                </ListItem>
            </Box>
        </Box>

    )
}

export default SideBar;