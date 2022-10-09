
import React from "react";
import TestChart from "../../components/Charts/TestChart";
import ChartCon from "../../components/DashboardCom/ChartContainer";
import "./index.css"
import Box from '@mui/material/Box';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="admin_Dashboard">
                <Box sx={{ display: 'flex' }}>
                    <ChartCon></ChartCon>
                </Box>
                           
            </div>
        )
    }
};
export default Dashboard;