import { Col, Row } from "antd";
import { Typography } from "antd";
import Profile from "./images/profile.png";
import "./App.css";
import WorkExperience from "./components/workExperience";
import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

function App() {
  const { Title, Text } = Typography;
  const myDetail = {
    fname: "NATTHAWUT",
    lname: "SAENG-NGOEN",
    role: "FRONTEND DEVELOPER",
    contact: {
      tel: "086-566-7688",
      email: "Natthawut.sae2@gmail.com",
      location: "10/149 Bunsiri St.Bangmueng Mueng Samutprakan 10270",
    },
    skill: [
      "React, Next, Redux",
      "Node, Express",
      "Firebase, FireStore, Realtime Database",
      "MongoDB",
      "Server Management Studio",
      "Alibaba (OSS)",
      "Material UI",
      "Ant Design",
      "Kubernetes",
      "Git",
      "Jira",
    ],
    education: {
      at: "Kasetsart University Sriracha Campus",
      major: "B.Eng., Faculty of Computer Engineering and Informatics,",
      time: "2016-2020",
    },
    about: "Web Developer with 2 year of experience in develop web aplication.",
    workExperience: [
      {
        role: "Front-end Developer",
        at: "Ascend Group (True Internet Data Center)",
        time: "Apr 2022 - present",
        description: [
          "Learn and research Kubernetes services.",
          "Develop a web console for Kubernetes services using React, Next, Kubernetes and Material UI",
          "Support testers after developing the website.",
        ],
      },
      {
        role: "Full Stack Developer",
        at: "Icon Framework co., Ltd. ",
        time: "Jul 2021 - Mar 2022 (9months)",
        description: [
          "Develop a web PR, PO, fix issue and change Request using React, NodeJS Express, Server Management Studio and Ant Design",
          "Develop a web application for administrators using Next, NodeJS Express, Server Management Studio and Material UI",
          "Develop a web check eligibility for treatment NHSO and print que for Kiosk using React and Material UI",
        ],
      },
      {
        role: "Full Stack Developer",
        at: "Siammodintech",
        time: "Jan 2021 - Jun 2021 (6months)",
        description: [
          "Develop web upload file using React, Firebase(Firestore), Alibaba Cloud (OSS)",
          "Deploy using Firebase",
          "Design database",
        ],
      },
    ],
  };

  const styleCard = {
    padding: "0 36px 36px 36px",
    borderBottom: "1px solid #000000",
  };

  const styleIcon = {
    fontSize: "18px",
    marginRight: "8px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minWidth: "950px",
        height: "100vh",
      }}
    >
      <div
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          width: "950px",
          backgroundColor: "#fdf7d9",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <Row>
          <Col span={24}>
            <Row>
              <div
                style={{
                  position: "absolute",
                  width: "525px",
                  height: "1100px",
                  backgroundColor: "#8499f0",
                  transform: "rotate(80deg)",
                  top: "-600px",
                  left: "150px",
                }}
              ></div>
              <Col span={18}>
                <Title
                  style={{
                    marginLeft: "12.5%",
                    fontSize: "48px",
                    marginBottom: "16px",
                    fontWeight: 400,
                    opacity: "0.8",
                  }}
                >
                  {myDetail.fname}
                </Title>
                <Title
                  style={{
                    marginLeft: "35%",
                    fontSize: "48px",
                    marginBottom: "16px",
                    marginTop: 0,
                    fontWeight: 400,
                    opacity: "0.8",
                  }}
                >
                  {myDetail.lname}
                </Title>
                <Title
                  style={{ marginLeft: "12.5%", opacity: "0.5" }}
                  level={3}
                >
                  {myDetail.role}
                </Title>
              </Col>
              <Col span={6} style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    marginTop: "16px",
                    width: "200px",
                    // height: "230px",
                    borderRadius: "50%",
                    boxShadow:
                      "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
                  }}
                  src={Profile}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div style={{ marginBottom: "40px" }} />
        <Row>
          <Col
            style={{
              borderRight: "1px solid #000000",
            }}
            span={12}
          >
            <div style={styleCard}>
              <div className="d--f fd--c">
                <Title style={{ letterSpacing: "4px" }} level={2}>
                  CONTACT
                </Title>
                <Text type="secondary">
                  <PhoneOutlined style={styleIcon} />
                  {myDetail.contact?.tel}
                </Text>
                <div style={{ marginBottom: "4px" }} />

                <Text type="secondary">
                  <MailOutlined style={styleIcon} />
                  {myDetail.contact?.email}
                </Text>
                <div style={{ marginBottom: "4px" }} />

                <Text type="secondary">
                  <GlobalOutlined style={styleIcon} />
                  {myDetail.contact?.location}
                </Text>
              </div>
            </div>
            <div style={styleCard}>
              <Title style={{ letterSpacing: "4px" }} level={2}>
                SKILL
              </Title>
              {myDetail.skill?.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.45)",
                      marginBottom: "8px",
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
            <div style={{ padding: "0 36px 36px 36px" }}>
              <Title style={{ letterSpacing: "4px" }} level={2}>
                EDUCATION
              </Title>
              <div className="d--f fd--c">
                <Title level={4}>{myDetail.education?.at}</Title>
                <Text type="secondary">{myDetail.education?.major}</Text>
                <Text>{myDetail.education?.time}</Text>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div style={styleCard}>
              <Title style={{ letterSpacing: "4px" }} level={2}>
                ABOUT
              </Title>
              <Text type="secondary">{myDetail.about}</Text>
            </div>
            <div style={{ padding: "0 36px 36px 36px" }}>
              <Title style={{ letterSpacing: "4px" }} level={2}>
                WORK EXPERIENCE
              </Title>
              {myDetail.workExperience?.map((item, index) => {
                return <WorkExperience key={index} item={item} />;
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
