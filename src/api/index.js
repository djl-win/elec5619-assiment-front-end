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

//开启博物馆
export const reqOpenMuseum = () =>ajax(BASE + '/5619/schedulers/start', null, 'GET')

//关闭博物馆
export const reqCloseMuseum = () =>ajax(BASE + '/5619/schedulers/stop', null, 'GET')

//获取分场馆七日内浏览记录
export const reqVenueSevenDaysData = (venueId) => ajax(BASE + '/5619/visits/sevendays/venue/'+ venueId, null, 'GET')

//查询分场馆实时客流量
export const reqRealTimeCapacityVenue= () =>ajax(BASE + '/5619/visits/today/eachvenuerealtimeflow', null, 'GET')

//获取分场馆容量
export const reqVenueCapacity = (venueId) => ajax(BASE + '/5619/visits/capacity/'+ venueId, null, 'GET')

//获取场馆当日总流量
export const reqVenueTodayTotalVisitor = () =>ajax(BASE + '/5619/visits/today/eachvenuetotalflow', null, 'GET')

//修改停车场容量
export const reqModifyParkingLotCapacity = (capacity) => ajax(BASE + '/5619/parkinglots/modifyCapacity/' + capacity, null, 'PUT')

//修改场馆1的容量
export const reqModifyVenueCapacity = (venueId,venueCapacity) => ajax(BASE + '/5619/venues/modifyVenueCapacity', {venueId,venueCapacity}, 'PUT')

//update profile, probably separte as pass and profile later
export const reqUpdateProfile = (AdminPeopleId, adminUsername, peopleEmail, peoplePhone, adminPassword) => ajax(BASE + '/5619/admins/update', {AdminPeopleId, adminUsername, peopleEmail, peoplePhone, adminPassword}, 'POST')
