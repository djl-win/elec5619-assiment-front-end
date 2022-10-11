import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TestChart from "../Charts/TestChart";
import Typography from '@mui/material/Typography';



const CommentContainer = () => {

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
    <ThemeProvider theme={theme}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',

          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
            <Grid item xs={12}>
              <Box  sx={{ display: 'flex', alignItems: 'end'}}>
                <Typography
                  variant="h4"
                  color="inherit"
                  noWrap
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Nunito Sans",
                    marginBottom: "5px"
                  }}
                  >
                  Comment
                </Typography>
              </Box>          
            </Grid>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper sx={{
                  marginLeft: "15px",
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: "580px",
                  weight: "1070px",
                  boxShadow: "0 8px 32px 0 rgba(202, 202, 202, 0.37)",
                  backdropFilter: "blur(5.5px)",
                  borderRadius: "30px",
                  border: "3px solid rgba( 255, 255, 255, 0.18 )"
                }}>
                  
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    </ThemeProvider>
  );
}

export default CommentContainer