/*
进行local数据存储的工具模块
*/
const USER_NAME = 'user';

export const storageUtils = {
    //保存user
    saveUser(loginInfo){
        // localStorage.setItem(USER_NAME, JSON.stringify(userUsername));
        localStorage.setItem(USER_NAME, loginInfo);
    },
    //读取user
    getUser(){
        // return JSON.parse(localStorage.getItem(USER_NAME) || '{}');
        return localStorage.getItem(USER_NAME) || '';
    },
    //删除user
    removeUser(){
        localStorage.removeItem(USER_NAME);
    }
}