  import * as React from 'react';
  import Box from '@mui/joy/Box';
  import List from '@mui/joy/List';
  import ListDivider from '@mui/joy/ListDivider';
  import ListItem from '@mui/joy/ListItem';
  import ListItemButton from '@mui/joy/ListItemButton';
  import Home from '@mui/icons-material/Home';
  import Person from '@mui/icons-material/Person';
  import Popupcontent from './Popupcontent';

  import Popover from '@mui/material/Popover';
  import Testimonals from './Testimonials';
  import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
  const WelcomeMessage = () => {
    // Extract the username from URL parameters
    const { username } = useParams();

    return (
      <div>
        <h5 component="a" style={{ color: 'white' }} >Welcome, {username}!</h5>
      </div>
    );
  };
  export default function HorizontalList() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { username } = useParams(); // Extract username from URL

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <Box
        component="nav"
        aria-label="My site"
        sx={{
          flexGrow: 1,
          transition: 'background 0.3s',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
        }}
      >
        <List
          role="menubar"
          orientation="horizontal"
          style={{
            background: isScrolled ? '#000' : 'transparent',
            height: '70px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ListItem role="none">
            <div style={{ marginRight: '10px', background: 'linear-gradient(to right, #330867 0%, #30cfd0 100%)', fontWeight: 'bold', fontSize: '16px', padding: '5px 10px', borderRadius: '5px', color: 'white' }}>RenDes</div>
            <ListItemButton
              role="menuitem"
              component="a"
              href=""
              aria-label="Home"
              style={{ color: 'white' }}
            >
              <Home />
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#house" style={{ color: 'white' }}>
            About
          </ListItemButton>
        </ListItem>
        <ListDivider />
          <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#design" style={{ color: 'white' }}>
            Designs
          </ListItemButton>
        </ListItem>
          <ListDivider />
          <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#Gallery" style={{ color: 'white' }}>
            Gallery
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="#Testimonials" style={{ color: 'white' }}>
              Testimonials
              </ListItemButton>
          </ListItem>
          <ListDivider />
        <ListItem role="none">
        <ListItemButton role="menuitem" component="a" href="#Contact" style={{ color: 'white' }}>
            Contact
          </ListItemButton>
        </ListItem>
        <ListDivider />
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="#About" style={{ color: 'white' }}>
              About
              </ListItemButton>
          </ListItem>
  
          {/* Profile Item */}
          <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
            <ListItemButton
            role="menuitem"
              component="a"
              href="#h"
              aria-label="Profile"
              onClick={handleClick}
              style={{ color: 'white' }}
            >
              <Person />
              </ListItemButton>
          </ListItem>
          <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/home" style={{ color: 'white' }}>
          Logout
          </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              className="hi"
              role="menuitem"
              component="a"
              href="#horizontal-list"
              onClick={handleClick}
              style={{ color: 'white' }}
            > 
            </ListItemButton>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Popupcontent /> {/* Render the component like this */}
            </Popover>
          </ListItem>
          <ListItem role="none">
          <Routes sx={{ marginInlineStart: 'auto' }}>
          <Route path="/home/:username" element={<WelcomeMessage />} />
          <Route path="/testimonials" element={<Testimonals />} />
          {/* Add more routes as needed */}
          </Routes>
        </ListItem>
        
        </List>
      </Box>
    );
  }

        