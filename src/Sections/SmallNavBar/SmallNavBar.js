import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NaveBar } from "../../Data";
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaSms } from 'react-icons/fa';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const phoneNumber = "+963983796029";
  const message = "مرحبًا، أريد التحدث معك!";

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
    <AppBar sx={{background: 'none', width: '100%', padding: '0px'}}  position="static">
      <Container maxWidth="x" sx={{padding: '10px', width: '100%', gap: '100px', padding: '0', height: '200px', display: 'flex', flexDirection: 'row',}}>
        <Toolbar sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}  disableGutters>
        <div className="flex flex-row items-center gap-[10px]">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfacCQhC3h6m9skEvWk75mx4YV2_GxYJNfw&s"
            }
            alt=""
            className="rounded-[50%] w-[70px] h-[70px] sm:max-md:w-[50px] sm:max-md:h-[50px] lg:max-xlg:w-[60px] lg:max-xlg:h-[60px] "
          />
          <div className="flex flex-col items-center pt-[10px]">
            <h2 className="sm:max-md:text-[15px] lg:max-xlg:text-[20px] font-black text-[30px] text-white">
              HAERDARA
              <span className="sm:max-md:text-[15px] lg:max-xlg:text-[18px] text-[25px] font-black text-[#ffa43b]">
                SALLOUM
              </span>
            </h2>
            <h6 className="sm:max-md:text-[8px] lg:max-xlg:text-[13px] text-white text-[20px] ">
              Front End Devloper
            </h6>
          </div>
        </div>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {NaveBar.map((page) => (
               <Link to={page.link}>
                 <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
               </Link>

              ))}
              <MenuItem>
                <div className="w-[50%] flex flex-col items-center ">
          <Link  to={`sms:${phoneNumber}?body=${encodeURIComponent(message)}`}>
          <FaSms className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
          </Link>
                  </div>
      <div className="w-[50%] flex flex-col items-cente" onClick={() =>{  
        window.location.href=`mailto:haedarahasan69@gmail.com?`}}>
          <MdEmail className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
        </div>
                </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: {xs: 'none', md: 'flex' } }}>
            {NaveBar.map((page) => (
             <Link to={page.link}>
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', width: '100px', height: '50px', padding: '5px', }}
              >
                {page.name}
              </Button>
             </Link>
            ))}
          </Box>
          <div className="max-xlg:flex sm:max-lg:hidden flex flex-row gap-[50px] translate-x-[200px] items-center w-[25%]">
          <Link to={`sms:${phoneNumber}?body=${encodeURIComponent(message)}`}>
          <FaSms className="animate-animatioPhoto text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
          </Link>
      <div onClick={() =>{  
        window.location.href=`mailto:haedarahasan69@gmail.com?`}}>
          <MdEmail className="animate-animatioPhoto2  text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
        </div>
            </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
