import {Box, Button, Card, CardContent, CardHeader, Divider, InputBase, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const searchHistory = (props) => {

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="in past 7 days"
                inputProps={{'aria-label': 'in past 7 days'}}
            />
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    )
}

export default searchHistory