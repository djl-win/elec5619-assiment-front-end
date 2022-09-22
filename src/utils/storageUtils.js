/*
进行local数据存储的工具模块
*/
const USER_NAME = 'user';

export const storageUtils = {
    //保存user
    saveUser(user){
        localStorage.setItem(USER_NAME, JSON.stringify(user));
        // localStorage.setItem(USER_NAME, user);
    },
    //读取user
    getUser(){
        return JSON.parse(localStorage.getItem(USER_NAME) || '{}');
        // return localStorage.getItem(USER_NAME) || '';
    },
    //删除user
    removeUser(){
        localStorage.removeItem(USER_NAME);
    }
}