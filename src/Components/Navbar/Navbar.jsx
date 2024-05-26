import React, { useState } from 'react';
import Logo from "../../Assets/logo2.png";
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { Link } from 'react-router-dom';
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    
    {
      text: "About",
      icon: <InfoIcon />,
    },
   
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    
  ];
  return (

    <nav>
      <div className="nav-logo-container">
      <Link to="/"> <img width="190" height="45" src={Logo} alt="" /></Link> 
      </div>
      <div className="navbar-links-container">
       
        <Link to="/About"> About</Link> 
        <Link to="/Contact"> Contact</Link> 
        
       
        <button className="primary-button">Se connecter</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar