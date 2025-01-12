import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import livrelo from './LIVRELO.png';
import logo from './logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import './styles.css';

const Search = styled('div')(({ theme, focused }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto', 
    },
    border: `1px solid ${focused ? '#0047b3' : '#162E62'}`, 
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)', 
    transition: 'border 0.3s ease-in-out', 
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#162E62', 
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#162E62', 
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch', 
            '&:focus': {
              width: '20ch', 
            },
        },
    },
    '& .MuiInputBase-input::placeholder': {
        color: '#162E62',
    },
}));




function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <AppBar className="navbar">
            <Toolbar className="toolbar">
                
                <Box
                    component="img"
                    className="navbar-logo"
                    alt="Logo"
                    src={logo}
                    sx={{ height: 50 }}  
                />

                
                <Box
                    component="img"
                    className="navbar-livrelo"
                    alt="Livrelo"
                    src={livrelo}
                    href="/"
                    sx={{ height: 25, marginRight: 'auto' }}  
                />

               
                <Box className="navbar-buttons">
                    <Button className="navbar-button">Home</Button>
                    <Button className="navbar-button">Minhas reservas</Button>

                    <Button className="navbar-button">Meus empréstimos</Button>
                    
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Buscar livro..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button className="navbar-button">Meu perfil</Button>
                </Box>
                <Box className="menu-icon-box">
                    <IconButton onClick={handleMenuOpen}>
                        <MenuIcon className="menu-icon" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Minhas reservas</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Meus empréstimos</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
