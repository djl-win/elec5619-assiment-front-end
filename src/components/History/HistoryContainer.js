import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HistorySearchBar from "./HistorySearchBar"
import * as React from "react";

const historyContainer = () => {

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
                <Toolbar/>
                <Container maxWidth="xl" sx={{mt: 6, mb: 6}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography variant="h4">
                            History
                        </Typography>
                    </Box>
                    <Box sx={{pt: 3}}>
                        <HistorySearchBar/>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default historyContainer;