import React from 'react';
import HistoryCon from "../../components/History/HistoryContainer";
import Fade from '@mui/material/Fade';

class History extends React.Component {
    render() {
        return (
            <Fade in={true}>
                <div className="admin_History">
                    <HistoryCon></HistoryCon>
                </div>
            </Fade>
        )
    }
}

export default History;