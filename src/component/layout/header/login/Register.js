
import { Button, Form, Input } from "antd";
import { useState } from "react";
import registerEmail from "../../../../api/registerEmail";
import {useNavigate} from "react-router-dom";

function Register () {
  
  const [current, setCurrent] = useState(0);
  const [valueInput, setValueInput] = useState({email:'',password:''});
  const navigate = useNavigate();

  const next = () => {
    setCurrent(current + 1);
  };
  const getvalueemail = function (e) {
    setValueInput({...valueInput, email: e.target.value})
  }
  const getvaluepass = function (e) {
    setValueInput({...valueInput, password: e.target.value})
  }
  const registerBtn = async () => {
    try{
      const Body = {
        "type": "email",
        "email": valueInput.email,
        "password": valueInput.password
      }
      const response = await registerEmail.postEmail(Body)
      localStorage.setItem('log',JSON.stringify(true));
      localStorage.setItem('token', JSON.stringify(response.meta.token));
      navigate('/home')
      window.location.reload();
      
    }
    catch(e) {
      console.log(e)
    }
  }
  const registerGmail = (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ position: "relative"}}
      >
        <h1 style={{ textAlign: "center" }}>Đăng Ký</h1>
        <svg className="tiktok-1i5fgpz-StyledChevronLeftOffset eg439om1" width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z" />
      </svg>

        <Form.Item>
          <Input onChange={getvalueemail} className="inputForm register"
            rules={[{ required: true, message: "Please input your username!" }]}
            placeholder="Địa chỉ email"
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
          <Input.Password onChange={getvaluepass} className="inputForm" placeholder="Mật khẩu" />
        </Form.Item>
        <a className="login-form-forgot" href="">
          Nhận nội dung thịnh hành, bản tin, khuyến mại, đề xuất và thông tin cập nhật tài khoản được gửi đến email của bạn
        </a>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={registerBtn} type="primary" style={{ width:375}}htmlType="submit">
            Tiếp
          </Button>
        </Form.Item>
      </Form>
    </>
  );
    
    return(
        <>
            {current > 0 ? registerGmail : <><h1>Đăng ký TikTok</h1>
            
            <Button onClick={next} className="btnModal">
            <svg className="iconModal" width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z" />
      </svg>
              Sử dụng email
            </Button>
            <Button className="btnModal">
            <svg className="iconModal" width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 24.1283C45 12.4595 35.598 3 24 3C12.402 3 3 12.4595 3 24.1283C3 34.6739 10.6794 43.415 20.7188 45V30.2357H15.3867V24.1283H20.7188V19.4735C20.7188 14.1782 23.854 11.2533 28.6508 11.2533C30.9476 11.2533 33.3516 11.6659 33.3516 11.6659V16.8655H30.7036C28.095 16.8655 27.2812 18.4943 27.2812 20.1668V24.1283H33.1055L32.1744 30.2357H27.2812V45C37.3206 43.415 45 34.6739 45 24.1283Z" fill="#1877F2" />
      </svg>
              Tiếp tục với Facebook
            </Button></>}
          </>
    )
}

export default Register;