import React from "react";
import './index.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import MySidebar from "../../components/Admin/MySidebar";
import Header from "../../components/Admin/Header";
import Footer from "../../components/Admin/Footer";
import Dashboard from "../Dashboard";
import Venue1 from "../Venue1"
import Venue2 from "../Venue2"
import Venue3 from "../Venue3"
import Portraits from "../Portraits"
import History from "../History"
import Comments from "../Comments"
import Visitors from "../Visitors"
import Setting from "../Setting"
import { storageUtils } from "../../utils/storageUtils"
import { error } from '../../utils/message.js'
import Profile from "../Profile";
import Box from '@mui/material/Box';


class Admin extends React.Component {


    render() {

        //登录验证
        const user = storageUtils.getUser();

        // 如果内存没有存储user（即当前没有登录）（注意网页一刷新，内存就会没）
        if (!user || !user.peopleId) {
            error("Please login, then to asscess this system!")
            // 自动跳转到登录界面(注意：在render()里面跳转页面通常用<Redirect/>，在事件回调函数的跳转页面则用history)
            return <Redirect to='/login' />

        }


        return (
            <div className="admin_page">
                <Box sx={{ display: 'flex' }}>
                    <Header></Header>
                    <MySidebar></MySidebar>
                    <Footer></Footer>
                </Box>
                
                <Switch>
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Dashborad" component={Dashboard} />
                    <Route path="/Venue1" component={Venue1} />
                    <Route path="/Venue2" component={Venue2} />
                    <Route path="/Venue3" component={Venue3} />
                    <Route path="/Portraits" component={Portraits}/>\
                    <Route path="/History" component={History}/>
                    <Route path="/Comments" component={Comments}/>
                    <Route path="/Visitors" component={Visitors}/>
                    <Route path="/Setting" component={Setting}/>
                    <Redirect to="/Dashborad" />
                </Switch>
            </div>
        )
    }
};
export default Admin;