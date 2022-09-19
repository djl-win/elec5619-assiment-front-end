import React from "react";
import './index.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import MySidebar from "../../components/Admin/MySidebar";
import Dashboard from "../Dashboard";
import Venue1 from "../Venue1"
import Venue2 from "../Venue2"

class Admin extends React.Component {
    

    render() {
        return (
            <div className="admin_page">
                <MySidebar></MySidebar>
                <div className="admin_page_body">

                    <Switch>
                        <Route path="/Dashborad" component={Dashboard} />
                        <Route path="/Venue1" component={Venue1} />
                        <Route path="/Venue2" component={Venue2} />
                        <Redirect to = "/Dashborad" />
                    </Switch>

                </div>

            </div>
        )
    }
};
export default Admin;