import React from "react";
import { reqAdminInfo } from "../../api"
import { error } from "../../utils/message"

class Profile extends React.Component {
  state = {
    adminInfo: {}
  }
  //页面加载时，查询该管理员的个人信息
  componentDidMount() {
    this.handleAdmin();
  }

  //获取管理员信息
  handleAdmin = async () => {

    //1.获取请求
    const response = await reqAdminInfo();

    //2.绑定数据
    if (response.code === 200) {
      this.setState({
        adminInfo: response.data
      })
    } else {
      error("🦄 " + response.msg);
    }


  }


  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          maxWidth: "500px",
          height: "350px",
          background:
            "linear-gradient(-45deg,rgba( 255, 255, 255, 0.1 ),rgba( 255, 255, 255, 0.4 ))",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          margin: "auto",
          marginTop: "140px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={localStorage.getItem("avatar")}
            alt="profile_img"
            style={{
              height: "140px",
              width: "140px",
              boxShadow: "0 0 42px 0 rgba( 255, 255, 255, 0.17 )",
              background: "rgba( 255, 255, 255, 0.25 )",
              backdropFilter: "blur( 4px )",
              border: "3px solid rgba( 255, 255, 255, 0.18 )",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "50% 10%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              borderBottom: "2px solid rgba(255,255,255,0.2)",
              padding: "0 40px",
            }}
          >
            <h3>Name :</h3>{this.state.adminInfo.peopleName}
            <h3>Gender :</h3>{
                 (this.state.adminInfo.peopleGender === 1 && 'Boy')|| (this.state.adminInfo.peopleGender === 2 && 'Girl')
              }
            <h3>Age :</h3>{this.state.adminInfo.peopleAge}
            <h3>Email:</h3>{this.state.adminInfo.peopleEmail}
            <h3>Phone:</h3>{this.state.adminInfo.peoplePhone}
          </div>
        </div>
      </div>
    );
  };
}

export default Profile;
