import React from "react";
import { Typography } from "antd";

const Index = ({ item }) => {
  const { Title, Text } = Typography;

  return (
    <div className="d--f fd--c">
      <Title level={4}>{item.role}</Title>
      <Text type="secondary">{item.at}</Text>
      <Text>{item.time}</Text>
      <div style={{ marginBottom: "8px" }} />
      {item.description?.map((d, i) => {
        return (
          <li
            key={i}
            style={{
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.45)",
              marginBottom: "8px",
            }}
          >
            {d}
          </li>
        );
      })}
    </div>
  );
};

export default Index;
