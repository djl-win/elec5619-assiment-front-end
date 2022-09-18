import * as React from "react";
import './index.css';
import loginImg from "./img/login.svg";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reqLogin, reqRegister, reqCheckCode} from '../../api'
import { success, error, warn } from '../../utils/message.js'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


class Login extends React.Component {
  state = {

    //注册还是登录
    showRegisterPage: 'none',
    showLoginPage: 'block',

    //登录表单
    //注册表单
    field: {
      adminUsername: '',
      adminPassword: '',
      peopleName: '',
      peopleGender: '1',
      peopleAge: '',
      peopleEmail: '',
      peoplePhone: '',
    },

    //验证码页面显示
    smsVisible: false,

    //验证码
    smsCode: '',

    //错误信息
    errors: {}

  }
  //打开验证码页面
  handleOpen = () => {
    this.setState({
      smsVisible: true,
      smsCode:''
    })
  };

  //关闭验证码页面
  handleClose = () => {
    this.setState({
      smsVisible: false,
      smsCode:''
    })
  }

  //清理表单数据
  handleCleanFormData = () => {
    this.setState({
      field: {
        adminUsername: '',
        adminPassword: '',
        peopleName: '',
        peopleGender: '1',
        peopleAge: '',
        peopleEmail: '',
        peoplePhone: '',
      }
    })
  };

  //切换页面
  handlePageRegister = () => {
    this.setState({
      showRegisterPage: 'block',
      showLoginPage: 'none'
    });
    this.handleCleanFormData();
  };

  //切换页面
  handlePageLogin = () => {
    this.setState({
      showRegisterPage: 'none',
      showLoginPage: 'block'
    });
    this.handleCleanFormData();
  };

  //表单双向绑定，可优化
  handleChange = e => {
    // e.preventDefault();
    // //获取当前dom对象
    // const target = e.target;
    // //获取当前dom对象的name属性
    // const name = target.name;
    // //获取当前dom对象的value属性
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // //更新状态

    // this.setState({
    //   [name]: value
    // })
    const { field } = this.state;
    field[e.target.name] = e.target.value;
    this.setState({ field });
  };

  //登录提交，可优化表单验证
  handleLogin = async (event) => {
    //1. 阻止表单提交
    event.preventDefault();

    //2. 表单简单验证 
    const adminUsername = this.state.field.adminUsername;
    const adminPassword = this.state.field.adminPassword;
    if (adminUsername === null || adminUsername === '') {
      warn("🦄 Please enter username!")
      return;
    } else if (adminPassword === null || adminPassword === '') {
      warn("🦄 Please enter password!")
      return;
    }

    //3. 发送请求
    const response = await reqLogin(adminUsername, adminPassword);

    //4. 处理请求
    if (response.code === 200) {
      //下一步验证码输入
      success("Sms Verification Code: " + response.data);
      this.handleOpen();
    } else {
      error(response.msg);
      this.handleCleanFormData();
    }
  }

  //注册提交,可优化表单验证
  handleRegister = async (event) => {
    event.preventDefault();
    //1. 表单验证一下
    const adminUsername = this.state.field.adminUsername;
    const adminPassword = this.state.field.adminPassword;
    const peopleName = this.state.field.peopleName;
    const peopleGender = this.state.field.peopleGender;
    const peopleAge = this.state.field.peopleAge;
    const peopleEmail = this.state.field.peopleEmail;
    const peoplePhone = this.state.field.peoplePhone;

    if (adminUsername === null || adminUsername === '') {
      warn("🦄 Please enter username!")
      return;
    } else if (adminPassword === null || adminPassword === '') {
      warn("🦄 Please enter password!")
      return;
    } else if (peopleName === null || peopleName === '') {
      warn("🦄 Please enter name!")
      return;
    } else if (peopleAge === null || peopleAge === '') {
      warn("🦄 Please enter age!")
      return;
    } else if (peopleEmail === null || peopleEmail === '') {
      warn("🦄 Please enter email!")
      return;
    } else if (peoplePhone === null || peoplePhone === '') {
      warn("🦄 Please enter phone!")
      return;
    }
    //2. 发送请求
    // console.log(this.state.field)
    const response = await reqRegister(adminUsername, adminPassword, peopleName, peopleGender, peopleAge, peopleEmail, peoplePhone);

    //3. 处理返回值
    if (response.code === 200) {
      //跳转页面
      this.handlePageLogin();
      success(response.data)
    } else {
      error(response.msg)
    }

  };

  //验证码提交
  handleSmscode = async (event) => {
    event.preventDefault();

    //1.验证表单
    const smsCode = this.state.smsCode;
    if (smsCode === null || smsCode === '') {
      warn("🦄 Please enter smsCode!")
      return;
    }

    //2.提交表单
    const response = await reqCheckCode(smsCode);
    
    //3.数据验证
    if(response.code === 200){
      //成功输入
      success("🦄 Welcome!")

      //关闭dialog
      this.handleClose();

      //清楚数据
      this.handleCleanFormData();

      //页面跳转

    }else{
      error("🦄 " + response.msg);
      this.setState({
        smsCode:''
      })
    }
  }

  render() {

    return (
      <div className="login">
        <div className="login-content">
          {/* <ToastContainer /> */}
          <div className="login-img">
            <img src={loginImg} alt="Login" />
          </div>
          <div className="login-forms">
            <form action="" className="login-registre" id="login-in" style={{ display: this.state.showLoginPage }}>
              <h1 className="login-title">Sign In</h1>

              <div className="login-box">
                <i className="bx bx-user login-icon"></i>
                <input
                  name="adminUsername"
                  onChange={this.handleChange}
                  value={this.state.field.adminUsername}
                  type="text" placeholder="Username"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-lock login-icon"></i>
                <input
                  name="adminPassword"
                  onChange={this.handleChange}
                  value={this.state.field.adminPassword}
                  type="password"
                  placeholder="Password"
                  className="login-input"
                />
              </div>

              <a onClick={this.handleLogin} className="login-button">Sign In</a>
              <div>
                <span className="login-account">Don't have an account?</span>
                <span onClick={this.handlePageRegister} className="login-signin" id="sign-up">Sign Up</span>
              </div>
            </form>

            <form className="login-create" id="login-up" style={{ display: this.state.showRegisterPage }}>
              <h1 className="login-title">Create Account</h1>

              <div className="login-box">
                <i className="bx bx-user login-icon"></i>
                <input
                  name="adminUsername"
                  onChange={this.handleChange}
                  value={this.state.field.adminUsername}
                  type="text"
                  placeholder="Username"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-lock-alt login-icon"></i>
                <input
                  name="adminPassword"
                  onChange={this.handleChange}
                  value={this.state.field.adminPassword}
                  type="password"
                  placeholder="Password"
                  className="login-input"
                />
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <input
                  name="peopleName"
                  onChange={this.handleChange}
                  value={this.state.field.peopleName}
                  type="text"
                  placeholder="Name"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <select
                  name="peopleGender"
                  value={this.state.field.peopleGender}
                  onChange={this.handleChange}
                  className="login-input"
                >
                  <option value="1">Boy</option>
                  <option value="2">Girl</option>
                </select>
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <input
                  name="peopleAge"
                  onChange={this.handleChange}
                  value={this.state.field.peopleAge}
                  type="text"
                  placeholder="Age"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <input
                  name="peopleEmail"
                  onChange={this.handleChange}
                  value={this.state.field.peopleEmail}
                  type="text"
                  placeholder="Email"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <input
                  name="peoplePhone"
                  onChange={this.handleChange}
                  value={this.state.field.peoplePhone}
                  type="text"
                  placeholder="Phone"
                  className="login-input" />
              </div>

              <a onClick={this.handleRegister} className="login-button">Sign Up</a>

              <div>
                <span className="login-account">Already have an account?</span>
                <span onClick={this.handlePageLogin} className="login-signup" id="sign-in">Sign In</span>
              </div>
            </form>
            <Dialog open={this.state.smsVisible}>
              <DialogTitle>Verification</DialogTitle>
              <DialogContent>
                <DialogContentText>
                Please enter the verification code within 120s
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Verification code"
                  fullWidth
                  variant="standard"
                  value={this.state.smsCode}
                  onChange={(e) => {
                    this.setState({
                      smsCode: e.target.value
                    })
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose}>Cancel</Button>
                <Button onClick={this.handleSmscode}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
          <ToastContainer />
        </div>
      </div>
    );
  }
};

export default Login;