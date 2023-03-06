import "antd/dist/antd.css";
import { useEffect,useState } from "react";
import { Slider, Row, Col, Avatar, Button, Dropdown, Space } from "antd";
import videoApi from "../../api/videoApi";

function Content() {
  const [video, setVideo] = useState([])
  useEffect(() => {
    const getVideo = async () => {
      try{
        const params={
          
          page: 1,
          type: "for-you"
        }
        const response = await videoApi.getAll(params);
       setVideo(response.data)
      }catch(e){
        console.log(e);
      }
    }
    getVideo()
  },[])

  const myvideo = document.getElementsByClassName("myvideo");
  const iconOff = document.getElementsByClassName("volumeIconOff");
  const iconOn = document.getElementsByClassName("volumeIconOn");
  const menu = (
    <div style={{ height: 100 }}>
      <Slider vertical onChange={onChangeVolume} defaultValue={30}></Slider>
    </div>
  );
  function onChangeVolume(value) {
    console.log(value);
    for (let i = 0; i < myvideo.length; i++) {
      myvideo[i].muted = false;
      myvideo[i].volume = value / 100;
    }
  }
  function playPause(e) {
    const element = e.target;
    if (e.target.paused) {
      e.target.play();
      element.closest(".ant-col-10").querySelector(".iconPause").style.display =
        "block";
      element.closest(".ant-col-10").querySelector(".iconPlay").style.display =
        "none";
    } else {
      e.target.pause();
      element.closest(".ant-col-10").querySelector(".iconPause").style.display =
        "none";
      element.closest(".ant-col-10").querySelector(".iconPlay").style.display =
        "block";
    }
  }
  function showHide(e) {
    const element = e.target;
    if (myvideo[0].paused) {
      element.closest(".ant-col-10").querySelector(".iconPause").style.display =
        "none";
      element.closest(".ant-col-10").querySelector(".iconPlay").style.display =
        "block";
    } else {
      element.closest(".ant-col-10").querySelector(".iconPause").style.display =
        "block";
      element.closest(".ant-col-10").querySelector(".iconPlay").style.display =
        "none";
    }
    if (
      element.closest(".ant-col-10").querySelector(".volumeIconOff").style
        .display == "none"
    ) {
      element
        .closest(".ant-col-10")
        .querySelector(".volumeIconOn").style.display = "block";
    }
  }
  function leave(e) {
    const element = e.target;
    element.closest(".ant-col-10").querySelector(".iconPause").style.display =
      "none";
    element.closest(".ant-col-10").querySelector(".iconPlay").style.display =
      "none";
    element
      .closest(".ant-col-10")
      .querySelector(".volumeIconOn").style.display = "none";
  }
  function settingVolumeOn() {
    for (let i = 0; i < iconOff.length; i++) {
      iconOff[i].style.display = "none";
      iconOn[i].style.display = "block";
      myvideo[i].muted = false;
    }
  }
  function settingVolumeOff() {
    for (let i = 0; i < iconOff.length; i++) {
      iconOff[i].style.display = "block";
      iconOn[i].style.display = "none";
      myvideo[i].muted = true;
    }
  }
  return (
    
    <>{
      console.log(video)}
      {video.length>0 ? video.map((val) => {
        return(
        <Row key={val.id}
        className="content"
        style={{
          width: "100%",
          position: "relative",
          paddingBottom: "8px",
          paddingTop: "35px",
        }}
      >
        <Row style={{ width: "100%" }}>
          <Col span={2}>
            <Avatar
              size={55}
              src={val.user.avatar}
            ></Avatar>
          </Col>
          <Col span={22} style={{ position: "relative" }}>
            <div>
              <Row>
                <a href="" style={{ display: "flex", alignItems: "center" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "0",
                    }}
                  >
                    {val.user.bio}
                  </h3>{" "}
                  <h4
                    style={{
                      fontSize: 13,
                      fontWeight: "normal",
                      marginLeft: "7px",
                      marginBottom: "0",
                    }}
                  >
                    {val.user.nickname}
                  </h4>
                </a>
              </Row>
              <Row>
                <span
                  style={{
                    fontWeight: "normal",
                    marginLeft: "7px",
                  }}
                >
                  {val.description}
                </span>
              </Row>
              <Row>
                <a>
                  <svg
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    className="tiktok-812w79-SvgIcon epjbyn1"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                    />
                  </svg>
                  {val.music}
                </a>
              </Row>
              <Button
                type="primary"
                ghost
                style={{
                  borderRadius: 4,
                  minWidth: 88,
                  height: 26,
                  lineHeight: 0,
                  position: "absolute",
                  right: "20px",
                  top: 8,
                }}
              >
                Follow
              </Button>
            </div>
            <div>
              <Row style={{ marginTop: 15 }}>
                <Col
                  onMouseLeave={leave}
                  onMouseOver={showHide}
                  span={10}
                  style={{ marginRight: 20, position: "relative" }}
                >
                  <video
                    className="myvideo"
                    onClick={playPause}
                    style={{ width: "100%", borderRadius: "5px" }}
                    src={val.file_url}
                  ></video>
                  <svg
                    className="play iconPlay"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="#fff"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"
                    />
                  </svg>
                  <svg
                    className="play iconPause"
                    width={20}
                    height={20}
                    viewBox="0 0 48 48"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 6C8 5.44771 8.44772 5 9 5H17C17.5523 5 18 5.44772 18 6V42C18 42.5523 17.5523 43 17 43H9C8.44772 43 8 42.5523 8 42V6Z" />
                    <path d="M30 6C30 5.44771 30.4477 5 31 5H39C39.5523 5 40 5.44772 40 6V42C40 42.5523 39.5523 43 39 43H31C30.4477 43 30 42.5523 30 42V6Z" />
                  </svg>
                  <Dropdown overlay={menu} placement="top">
                    <Space className="volume">
                      <svg
                        className="volumeIconOff"
                        onClick={settingVolumeOn}
                        width={24}
                        height={24}
                        viewBox="0 0 48 48"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"
                        />
                      </svg>
                      <svg
                        className="volumeIconOn"
                        onClick={settingVolumeOff}
                        width={24}
                        height={24}
                        viewBox="0 0 48 48"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
                        />
                      </svg>
                    </Space>
                  </Dropdown>
                </Col>
                <Col
                  span={2}
                  style={{ alignSelf: "self-end", textAlign: "center" }}
                >
                  <Button id="heart" className="touch">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width={24}
                      height={24}
                    >
                      <g clipPath="url(#clip1)">
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
                            fill="#161823"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499 18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z"
                          fill="black"
                          fillOpacity="0.03"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x="-0.9"
                          y="1.05"
                          width="25.8"
                          height="24.05"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="1.2" />
                          <feGaussianBlur stdDeviation="1.2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip1">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                  <label htmlFor="heart">{val.likes_count}</label>

                  <Button id="comment" className="touch">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0393 14.7137C17.75 13 18.75 11.215 18.75 9.13662C18.75 4.91897 14.8887 1.49997 10.125 1.49997C5.36129 1.49997 1.5 4.91897 1.5 9.13675C1.5 13.3545 5.48622 16.25 10.25 16.25V17.6487C10.25 18.0919 10.7095 18.3771 11.0992 18.1659C12.3166 17.5062 14.5725 16.183 16.0393 14.7137ZM5.93527 8.10679C6.61608 8.10679 7.16797 8.65471 7.16797 9.32962C7.16797 10.0059 6.61608 10.5538 5.93527 10.5538C5.2556 10.5538 4.70368 10.0059 4.70368 9.32962C4.70368 8.65471 5.2556 8.10679 5.93527 8.10679ZM11.3572 9.32962C11.3572 8.65471 10.8055 8.10679 10.125 8.10679C9.44459 8.10679 8.89289 8.65471 8.89289 9.32962C8.89292 10.0059 9.44462 10.5538 10.125 10.5538C10.8055 10.5538 11.3572 10.0059 11.3572 9.32962ZM14.3146 8.10679C14.9953 8.10679 15.5464 8.65471 15.5464 9.32962C15.5464 10.0059 14.9953 10.5538 14.3146 10.5538C13.6339 10.5538 13.082 10.0059 13.0821 9.32962C13.0821 8.65471 13.6339 8.10679 14.3146 8.10679Z"
                      />
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.25 16.2499C10.25 16.2499 15.0278 15.8807 17.025 13.3234C15.0278 16.1364 13.0307 17.6708 11.2831 18.1822C9.53561 18.6937 10.25 16.2499 10.25 16.2499Z"
                        fill="url(#BubbleEllipsisRightFill_paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="BubbleEllipsisRightFill_paint0_linear"
                          x1="8.50426"
                          y1="15.6957"
                          x2="9.29499"
                          y2="18.1805"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop />
                          <stop offset={1} stopOpacity="0.01" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Button>
                  <label htmlFor="comment">{val.comments_count}</label>

                  <Button id="share" className="touch">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9376 3.17495C10.9376 2.58272 11.6469 2.27873 12.0758 2.68715L18.6021 8.90241C19.1764 9.44937 19.1564 10.3717 18.5588 10.8931L12.0541 16.5689C11.6184 16.9491 10.9376 16.6397 10.9376 16.0614V13.4894C10.9376 13.4894 3.95344 12.2312 1.7131 16.3434C1.50423 16.7268 0.690072 16.8609 0.855563 14.948C1.54761 11.4273 2.96196 5.93084 10.9376 5.93084V3.17495Z"
                        fill="#161823"
                      />
                      <path
                        opacity="0.03"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.7538 6.21161L17.0486 8.80136C17.2777 9.25947 17.1677 9.81453 16.7812 10.1506L10.9824 15.193C10.9824 15.193 10.7017 16.5964 11.5437 16.5964C12.3857 16.5964 19.1218 10.4217 19.1218 10.4217C19.1218 10.4217 19.4025 9.57964 18.5605 8.73763C17.7185 7.89563 15.7538 6.21161 15.7538 6.21161Z"
                        fill="#161823"
                      />
                      <path
                        opacity="0.09"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9374 6.22983V13.5272C10.9374 13.5272 4.25359 12.5854 2.16026 15.7726C0.146021 18.8394 0.331011 12.3091 3.36331 9.05711C6.39561 5.8051 10.9374 6.22983 10.9374 6.22983Z"
                        fill="url(#paint0_radial)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial"
                          cx={0}
                          cy={0}
                          r={1}
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(11.1827 18.2553) rotate(-113.046) scale(8.93256 8.78076)"
                        >
                          <stop />
                          <stop offset="0.995496" stopOpacity="0.01" />
                          <stop offset={1} stopOpacity="0.01" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </Button>
                  <label htmlFor="share">{val.shares_count}</label>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Row>
        )
      }): console.log(video)}
    </>
  );
}

export default Content;
