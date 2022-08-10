import React, { useState } from "react";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { AppBar, Avatar, Box, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import { Notifications } from "@mui/icons-material";
import { padding } from "@mui/system";


const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "2rem",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}))


const NavBar = () => {
    const [open, setOpen] = useState(false)


    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}> MDB - DEV </Typography>
                <AllInclusiveIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search ><InputBase sx={{ width: '100%' }} placeholder="Search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={(e) => setOpen(true)} sx={{ width: '30px', height: '30px', marginRight: '1rem' }} src='https://images.pexels.com/photos/12277695/pexels-photo-12277695.jpeg?auto=compress&cs=tinysrgb&w=30&lazy=load' />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: '30px', height: '30px', marginRight: '1rem' }} src='https://images.pexels.com/photos/12277695/pexels-photo-12277695.jpeg?auto=compress&cs=tinysrgb&w=30&lazy=load' />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="basic-menu"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default NavBar