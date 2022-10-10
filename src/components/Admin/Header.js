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
import { storageUtils } from "../../utils/storageUtils"


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
      secondary: {
        main: "#448aff",
        contrastText: "#FFFFFF",
      },
    },
  });

  return (
    
    <ThemeProvider theme={theme} >
      <AppBar position="absolute" sx={{height: "70px", boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)"}}>
        <Toolbar sx={{
          pr: '30px',
        }}
        >

          <Typography component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Visit<InsightsIcon />Sight
          </Typography>


          <Box sx={{ flexGrow: 0 , display: "flex"}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="profile_img" src={localStorage.getItem("avatar")} />
              </IconButton>
            </Tooltip>
            <div style={{
                  color: "black",
                  fontFamily: "Nunito Sans",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                  paddingTop:"3px" ,
                  fontSize: "20px"
                }}>{storageUtils.getUser().peopleName}</div>
                
            <Menu
              sx={{ mt: '50px' }}
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
        </Toolbar>
      </AppBar>

    </ThemeProvider>


  );

}

export default Header
