import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import InsightsIcon from '@mui/icons-material/Insights';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const settings = ['Profile', 'Logout'];

const Header = () => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
        contrastText: "000000"
      },
        main: "#448aff",
        contrastText: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box component="nav" sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" elevation={1}>
          <Toolbar variant="dense">
            <Box flex={1} display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Typography variant="h6">
                  Visit
                  <InsightsIcon/>
                  Sight
                </Typography>
              </Box>
                  
              <Box display="flex">
                <Tooltip title="Open settings">

                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="profile_img" src={localStorage.getItem("avatar")} />
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
    
  
  );

}

export default Header
