import {useState} from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {ExitIcon, FileAddIcon, FileListIcon, GetReportIcon, HomeIcon, UserIcon} from "../base/svg";
import {Link} from "react-router-dom";
const Header = ()=>{

    const token = localStorage.getItem('token') ;
    const [login , setLogin] = useState(!!token) ;
    const exit = ()=>{
        localStorage.removeItem('token') ;
        setLogin(false) ;
    }
    const pages = [
        {
            name : "صفحه اصلی",
            link : "/" ,
            icon : <HomeIcon/> ,
            key : 0
        },
        {
            name : "ایجاد پرونده",
            link : "/create-file" ,
            icon : <FileAddIcon/>,
            key : 1
        },
        {
            name : "لیست پرونده ها",
            link : "/" ,
            icon : <FileListIcon/>,
            key : 2
        } ,
        {
            name : "گزارشگیری",
            link : "/" ,
            icon : <GetReportIcon/>,
            key : 3
        }
    ]
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar sx={{backgroundColor : "transparent" , boxShadow : 0 , position : 'relative'}} position="static">
            <Container maxWidth="xl">
                <Toolbar sx={{justifyContent : "space-between"}} disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: {lg : 5 , sm : 1}}}>
                        <img src="./logo.svg" alt="iranian pooshesh logo"/>
                    </Box>
                    <Box sx={{display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><Link to={page.link}>{page.name}</Link></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img src="./logo.svg" alt="iranian pooshesh logo"/>
                    </Box>
                    <Box component={'ul'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} , gap : {sm : 5 , lg : 15}}}>
                        {pages.map((page) => (
                            <Link to={page.link} key={page.key} style={{borderTop : !page.key ? "3px solid #FA8735" : ""}}>
                                <Typography
                                    component={'li'}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'flex' , alignItems : "center" , color : !page.key ? '#FA8735' : ""}}
                                >
                                    <Typography component={'span'} sx={{ml : 1}}>{page.icon}</Typography>
                                    {
                                        page.name
                                    }
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0  , display : {xs : "flex" , md : "none"}}}>
                        {
                            !login ?
                                <Link to={'/login'}>
                                    <Typography sx={{display : "flex" , alignItems : "center" , justifyContent : "flex-end"}} component={'li'}>
                                        <ExitIcon/>
                                        <Typography component={'span'} sx={{mr : 1}}>ورود</Typography>
                                    </Typography>
                                </Link> :
                                <>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="اکرم مکرم">ا م</Avatar>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography onClick={exit} textAlign="center">خروج</Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                        }

                    </Box>
                    <Box sx={{ flexGrow: .4  , display : {xs : "none" , md : "flex"} , justifyContent : login ? "space-between" : "flex-end"}}>
                        {
                            login ?
                                <>
                                    <Typography sx={{display : "flex" , alignItems : "center"}} component={'li'}>
                                        <UserIcon/>
                                        <Typography component={'span'} sx={{mr : 1}}>اکرم مکرم</Typography>
                                    </Typography>
                                    <Typography onClick={exit} sx={{display : "flex" , alignItems : "center"}} component={'li'}>
                                        <ExitIcon/>
                                        <Typography component={'span'} sx={{mr : 1 , cursor : "pointer"}}>خروج</Typography>
                                    </Typography>
                                </> :
                                <Link to={'/login'}>
                                    <Typography sx={{display : "flex" , alignItems : "center" , justifyContent : "flex-end"}} component={'li'}>
                                        <ExitIcon/>
                                        <Typography component={'span'} sx={{mr : 1}}>ورود</Typography>
                                    </Typography>
                                </Link>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header ;