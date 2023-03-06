import HeaderPage from "./component/layout/header/HeaderPage";
import SideBar from "./component/sidebar/SideBar";
import Content from "./component/layout/Content";
import "./App.less";
import "./App.css";
import { Space,Row, Col} from "antd";
function App() {
  return (
      <>
       <HeaderPage />
        <Row style={{justifyContent: 'center',}}>
          <Row style={{marginTop: '60px', maxWidth: '1150px', width: '100%'}}>
            <Col span={8}>
              <SideBar />
            </Col>
            <Col span={16} style={{padding: '5px 0 24px 55px'}}>
              <Content />
            </Col>
          </Row>
        </Row>
      </>
  );
}

export default App;
