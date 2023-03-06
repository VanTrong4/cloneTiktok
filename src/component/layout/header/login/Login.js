import "antd/dist/antd.css";
import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import Register from "./Register";
import loginEmail from "../../../../api/loginEmail";
import {useNavigate} from "react-router-dom";
function Login() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState({email:'',password:''});
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setLogin({...login, email: e.target.value});
  }
  const onChangePass = (e) => {
    setLogin({...login, password: e.target.value});
  }
  const loginBtn = async function() {
    try{
      const params = {
        'email':login.email,
        'password':login.password
      }
      const res = await loginEmail.postLogin(params)
      localStorage.setItem('log',true);
      localStorage.setItem('token',res.meta.token);
      navigate('/home')
      window.location.reload();
    }catch (e) {
      console.log(e);
    }
  }
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const changeLogins = () => {
    setRegister(!register)
  }
  const footer = (
    <>
      <span>Bạn không có tài khoản?</span>
      <a className="changeText" onClick={changeLogins}>{register ? `Đăng nhập` : `Đăng kí`}</a>
    </>
  );
  const loginGmail = (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ position: "relative"}}
      >
        <h1 style={{ textAlign: "center" }}>Đăng nhập</h1>
        <svg onClick={prev} className="tiktok-1i5fgpz-StyledChevronLeftOffset eg439om1" width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z" />
      </svg>

        <Form.Item>
          <Input className="inputForm" onChange={onChangeEmail}
            rules={[{ required: true, message: "Please input your username!" }]}
            placeholder="Email hoặc TikTok ID"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password onChange={onChangePass} className="inputForm" placeholder="Mật khẩu" />
        </Form.Item>
        <a className="login-form-forgot" href="">
          Quên mật khẩu?
        </a>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={loginBtn} type="primary" style={{ width:375}}htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </>
  );

  return (
    <>
      <Button
        type="primary"
        onClick={() => setOpen(true)}
        size="large"
        style={{ marginLeft: "16px" }}
      >
        Đăng nhập
      </Button>
      <Modal
        centered
        open={open}
        width={483}
        footer={footer}
        onCancel={() => setOpen(false)}
      >
        {register ? <Register/> : current == 0 ? (
          <>
            <h1>Đăng nhập vào TikTok</h1>
            <Button className="btnModal">
            <svg className="iconModal" width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V21C6 22.1046 6.89543 23 8 23H21C22.1046 23 23 22.1046 23 21V8C23 6.89543 22.1046 6 21 6H8ZM10 19V10H19V19H10ZM28 6C26.8954 6 26 6.89543 26 8V21C26 22.1046 26.8954 23 28 23H41C42.1046 23 43 22.1046 43 21V8C43 6.89543 42.1046 6 41 6H28ZM30 19V10H39V19H30ZM8 26C6.89543 26 6 26.8954 6 28V41C6 42.1046 6.89543 43 8 43H21C22.1046 43 23 42.1046 23 41V28C23 26.8954 22.1046 26 21 26H8ZM10 39V30H19V39H10ZM26 42C26 42.5523 26.4477 43 27 43H29C29.5523 43 30 42.5523 30 42V27C30 26.4477 29.5523 26 29 26H27C26.4477 26 26 26.4477 26 27V42ZM32.5 42C32.5 42.5523 32.9477 43 33.5 43H35.5C36.0523 43 36.5 42.5523 36.5 42V27C36.5 26.4477 36.0523 26 35.5 26H33.5C32.9477 26 32.5 26.4477 32.5 27V42ZM40 43C39.4477 43 39 42.5523 39 42V27C39 26.4477 39.4477 26 40 26H42C42.5523 26 43 26.4477 43 27V42C43 42.5523 42.5523 43 42 43H40Z" />
      </svg>
              Sử dụng mã QR
            </Button>
            <Button onClick={next} className="btnModal">
            <svg className="iconModal" width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z" />
      </svg>
              Số điện thoại / Email / TikTok ID
            </Button>
            <Button className="btnModal">
            <svg className="iconModal" width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 24.1283C45 12.4595 35.598 3 24 3C12.402 3 3 12.4595 3 24.1283C3 34.6739 10.6794 43.415 20.7188 45V30.2357H15.3867V24.1283H20.7188V19.4735C20.7188 14.1782 23.854 11.2533 28.6508 11.2533C30.9476 11.2533 33.3516 11.6659 33.3516 11.6659V16.8655H30.7036C28.095 16.8655 27.2812 18.4943 27.2812 20.1668V24.1283H33.1055L32.1744 30.2357H27.2812V45C37.3206 43.415 45 34.6739 45 24.1283Z" fill="#1877F2" />
      </svg>
              Tiếp tục với Facebook
            </Button>
          </>
        ) : (
          loginGmail
        )}
        
      </Modal>
    </>
  );
}

export default Login;
