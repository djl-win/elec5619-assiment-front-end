import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { GlobalStyles } from '@mui/material';



const VisitorTable = () => {

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 10,
    });

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <GlobalStyles
                styles={{
                '.MuiDataGrid-toolbarContainer': {
                    backgroundColor: '#448aff',
                },
                }}
            />
            <DataGrid
                {...data}
                components={{
                Toolbar: GridToolbar,
                }}
            />
        </Box>
        
    );
}


export default VisitorTable