import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { FaRegCircleCheck, FaLink, FaCircleInfo } from "react-icons/fa6";
import { fetchHealthCheckInfo, getColor } from "../services/Helper";
import { useEffect, useRef, useState } from "react";
import { HealthCheck } from "../services/Types";
import StompClient from "../services/StompClient";
import PopUp, { ModalRef } from "../components/PopUp";

const HealthCheckBoard = () => {
  const [healthCheck, setHealthCheck] = useState<HealthCheck | null>(null);

  const modalRef = useRef<ModalRef | null>(null);
  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  useEffect(() => {
    const loadHealthCheckInfo = async () => {
      try {
        const data = await fetchHealthCheckInfo();
        setHealthCheck(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadHealthCheckInfo();
    return () => {};
  }, []);

  useEffect(() => {
    var client = new StompClient("ws://LAPTOP-UMF83CB2:8080/ws-endpoint1");

    client.connect((frame) => {
      frame.body;
      console.log(`firstConnect : ${frame.body}`);
      client?.subscribe("/topic/healthCheck", (message) => {
        console.log(`Received message: ${message.body}`);
        const data = JSON.parse(message.body) as HealthCheck;
        setHealthCheck(data);
      });
    });

    return () => {
      console.log("disconnect");
      client.disconnect();
    };
  }, []);
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="success">
              <FaRegCircleCheck></FaRegCircleCheck>
            </div>
            <div className="accordian-header-container">
              Health Check
              <div>| Total : {healthCheck?.items}</div>
              <div>| Healthy: {healthCheck?.healthyItems}</div>
              <div>| UnHealthy: {healthCheck?.unhealthyItems}</div>
              <div>| Elapsed: {healthCheck?.elapsed}</div>
              <div>| Last Updated: {healthCheck?.timeStamp}</div>
            </div>
          </Accordion.Header>
          <Accordion.Body className="container-wrap">
            {healthCheck?.healthCheckItems.map((item) => (
              <Card
                bg={getColor(item.healthy)}
                key={item.name}
                //text={variant.toLowerCase() === "light" ? "dark" : "white"}
                text="white"
                style={{ width: "12rem" }}
                className="mb-1"
              >
                <Card.Header
                  className="card-header-font"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {item.name.toUpperCase()}
                  <div
                    style={{
                      display: "flex",
                      columnGap: "5px",
                    }}
                  >
                    <div onClick={handleOpenModal}>
                      <FaCircleInfo></FaCircleInfo>
                    </div>
                    <PopUp
                      title="Alert"
                      content={item.description}
                      ref={modalRef}
                    />
                    <a href={item?.wiki} target="_">
                      <FaLink></FaLink>
                    </a>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="card-font">{item.description}</div>
                  <Card.Text className="card-font">{item.error}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default HealthCheckBoard;
