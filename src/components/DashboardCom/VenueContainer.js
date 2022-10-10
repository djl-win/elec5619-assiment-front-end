import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TestChart from "../Charts/TestChart";
import Typography from '@mui/material/Typography';



const ChartContainer = () => {

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
                  >
                  Venue1
                </Typography>
              </Box>          
            </Grid>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  realtime visit
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  total visitor
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  Action
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TestChart/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    </ThemeProvider>
  );
}

export default ChartContainer