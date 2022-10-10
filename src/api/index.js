import ajax from './ajax';
// import axios from 'axios';

const BASE = '' /* 空串是为了不让域名固定。因为有可能是3000端口，也有可能是3001，所以就不固定写3000 */

// 登录接口
export const reqLogin = (adminUsername, adminPassword) => ajax(BASE + '/5619/admins/login', {adminUsername, adminPassword}, 'PUT')

//注册接口
export const reqRegister = (adminUsername, adminPassword,peopleName,peopleGender,peopleAge,peopleEmail,peoplePhone) => ajax(BASE + '/5619/admins/register', {adminUsername, adminPassword,peopleName,peopleGender,peopleAge,peopleEmail,peoplePhone}, 'POST')

//验证码接口
export const reqCheckCode = (smsCode) => ajax(BASE + '/5619/admins/login/verify/'+ smsCode, null, 'GET')

//查询管理员信息接口
export const reqAdminInfo= () => ajax(BASE + '/5619/admins/adminInfo', null, 'GET')

//查询7日内的访客数据
export const reqSevenDaysData = () =>ajax(BASE + '/5619/visits/sevendays', null, 'GET')

//查询博物馆的容量
export const reqMuseumCapacity = () =>ajax(BASE + '/5619/visits/capacity', null, 'GET')

//查询博物馆的实时流量
export const reqRealTimeCapacity = () =>ajax(BASE + '/5619/visits/today/totalrealtimeflow', null, 'GET')

//查询当日总流量
export const reqTodayTotalVisitor = () =>ajax(BASE + '/5619/visits/today/totalflow', null, 'GET')

//查询停车场信息
export const reqParkingLotInfo = () =>ajax(BASE + '/5619/parkinglots', null, 'GET')
