import * as React from "react";
import './index.css';
import loginImg from "./img/login.svg";

class Login extends React.Component {
  state = {

    //注册还是登录
    showRegisterPage: 'none',
    showLoginPage: 'block',

    //登录表单
    //注册表单
    adminUsername: '',
    adminPassword: '',
    peopleName: '',
    peopleGender: '1',
    peopleAge: '',
    peopleEmail: '',
    peoplePhone: '',


    //验证码
    smsCode: ''

  }

  handleCleanFormData = () => {
    this.setState({
      adminUsername: '',
      adminPassword: '',
      peopleName: '',
      peopleGender: '1',
      peopleAge: '',
      peopleEmail: '',
      peoplePhone: ''
    })
  };


  handlePageRegister = () => {
    this.setState({
      showRegisterPage: 'block',
      showLoginPage: 'none'
    });
    this.handleCleanFormData();
  };

  handlePageLogin = () => {
    this.setState({
      showRegisterPage: 'none',
      showLoginPage: 'block'
    });
    this.handleCleanFormData();
  };

  //表单处理
  handleChange = e => {
    e.preventDefault();
    //获取当前dom对象
    const target = e.target;
    //获取当前dom对象的name属性
    const name = target.name;
    //获取当前dom对象的value属性
    const value = target.type === 'checkbox' ? target.checked : target.value;
    //更新状态

    this.setState({
      [name]: value
    })
  };

  // 登录提交
  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state);

    //登陆完清理数据
    this.handleCleanFormData();
  };

  // 注册提交
  handleRegister = (event) => {
    event.preventDefault();
    console.log(this.state);

    //登陆完清理数据
    this.handleCleanFormData();
  };

  render() {

    return (

      <div className="login">
        <div className="login-content">
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
                  value={this.state.adminUsername}
                  type="text" placeholder="Username"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-lock login-icon"></i>
                <input
                  name="adminPassword"
                  onChange={this.handleChange}
                  value={this.state.adminPassword}
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

            <form action="" className="login-create" id="login-up" style={{ display: this.state.showRegisterPage }}>
              <h1 className="login-title">Create Account</h1>

              <div className="login-box">
                <i className="bx bx-user login-icon"></i>
                <input
                  name="adminUsername"
                  onChange={this.handleChange}
                  value={this.state.adminUsername}
                  type="text"
                  placeholder="Username"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-lock-alt login-icon"></i>
                <input
                  name="adminPassword"
                  onChange={this.handleChange}
                  value={this.state.adminPassword}
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
                  value={this.state.peopleName}
                  type="text"
                  placeholder="Name"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <select 
                value={this.state.peopleGender}
                onChange={e => this.setState({ peopleGender: e.target.value })}
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
                  value={this.state.peopleAge}
                  type="text"
                  placeholder="Age"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <input
                  name="peopleEmail"
                  onChange={this.handleChange}
                  value={this.state.peopleEmail}
                  type="text"
                  placeholder="Email"
                  className="login-input" />
              </div>

              <div className="login-box">
                <i className="bx bx-at login-icon"></i>
                <input
                  name="peoplePhone"
                  onChange={this.handleChange}
                  value={this.state.peoplePhone}
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
          </div>
        </div>
      </div>
    );
  }
};

export default Login;