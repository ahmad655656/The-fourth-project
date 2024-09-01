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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NaveBar } from "../../Data";
import { Link } from 'react-router-dom';
import { BiPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
          <div className="max-xlg:flex sm:max-xlg:hidden flex flex-row gap-[50px] items-center w-[25%]">
        <div className="w-[50%] flex flex-col items-center ">
          <BiPhoneCall className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
          <h3 className="text-[20px]">+963-0983-796-029</h3>
        </div>
        <div className="w-[50%] flex flex-col items-center">
          <MdEmail className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
          <h3 className="text-[20px]">haedarahasan69@gmail.com</h3>
        </div>
            </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
