import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { FaRegCircleCheck, FaLink, FaCircleInfo } from "react-icons/fa6";
import { fetchHealthCheckInfo, getColor } from "../utils/helper";
import { useEffect, useRef, useState } from "react";
import { HealthCheckInfo } from "../models/HealthCheckInfo";
import { HealthCheck } from "../models/HealthCheck";

import PopUp, { ModalRef } from "../components/PopUp";
import useWebSockets from "../hooks/useHeathCheckSockets";
import { OverlayTrigger, Popover } from "react-bootstrap";
import HealthInfo from "../components/healthcheck/HealthInfoDetails";

const HealthCheckBoard = () => {
  const [healthCheck, setHealthCheck] = useState<HealthCheck | null>(null);

  const [name, setName] = useState<HealthCheckInfo | null>(null);
  const modalRef = useRef<ModalRef | null>(null);

  // const handleOpenModal = (name: string) => {
  //   modalRef?.current?.setDetails(name, name);
  //   modalRef?.current?.open();
  // };
  useWebSockets({ setHealthCheck });

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

  const popover = (
    <Popover id="popover-basic">
      <HealthInfo HealthCheckInfo={name}></HealthInfo>
    </Popover>
  );

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header
            style={{
              backgroundColor: "red",
            }}
          >
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
                    key={item.name}
                  >
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popover}
                      rootClose={true} // Close the overlay when clicking outside
                    >
                      <div onClick={() => setName(item)}>
                        <FaCircleInfo></FaCircleInfo>
                      </div>
                    </OverlayTrigger>

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
      <PopUp title1="Alert" ref={modalRef} />
    </>
  );
};

export default HealthCheckBoard;
