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
