import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';import Toolbar from '@mui/material/Toolbar';

export default function RealTimeVisitor() {
  return (
    <React.Fragment>
        <Box
          sx={{
            textAlign:"center",
          }}
        >
            <Typography component="h2" variant="h6" color="text.secondary">
                Realtime Visitor
            </Typography>
            <Typography component="p" variant="h4">
                189/500
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                8.5% Up from last hour
            </Typography>
        </Box>
      
    </React.Fragment>
  );
}