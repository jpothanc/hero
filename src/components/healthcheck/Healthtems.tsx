import { useState } from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { FaCircleInfo, FaLink, FaDatabase } from "react-icons/fa6";
import { HealthCheck, HealthCheckInfo } from "../../services/Types";
import { getColor } from "../../services/Helper";
import HealthInfoDetails from "./HealthInfoDetails";
import HealthInfoQuickDetails from "./HealthInfoQuickDetails";
import { GiSpiderWeb } from "react-icons/gi";
type Props = {
  healthCheck: HealthCheck | null;
};

const HealthItems = ({ healthCheck }: Props) => {
  const [name, setName] = useState<HealthCheckInfo | null>(null);

  const popover = (
    <Popover id="popover-basic">
      <HealthInfoDetails HealthCheckInfo={name}></HealthInfoDetails>
    </Popover>
  );
  return (
    <>
      {healthCheck?.healthCheckItems.map((item) => (
        <Card
          bg={getColor(item.healthy)}
          key={item.name}
          text="white"
          style={{ width: "12rem", fontSize: "10px" }}
          className="mb-1"
        >
          <Card.Header>
            <div className="card-header-font">
              {item.name.toUpperCase()}
              <div
                style={{
                  display: "flex",
                  columnGap: "5px",
                }}
                key={item.name}
              >
                <div>
                  {item.group === "database" ? (
                    <FaDatabase></FaDatabase>
                  ) : (
                    <GiSpiderWeb></GiSpiderWeb>
                  )}
                </div>
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
            </div>
          </Card.Header>
          <Card.Body>
            <HealthInfoQuickDetails
              HealthCheckInfo={item}
              color="transparent"
              error={item.error}
            ></HealthInfoQuickDetails>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default HealthItems;
