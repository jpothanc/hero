import { useState } from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { FaCircleInfo, FaLink, FaDatabase } from "react-icons/fa6";
import { HealthCheckInfo } from "../../models/HealthCheckInfo";
import { HealthCheck } from "../../models/HealthCheck";
import HealthInfoDetails from "./HealthInfoDetails";
import HealthInfoQuickDetails from "./HealthInfoQuickDetails";
import { GiSpiderWeb } from "react-icons/gi";
import { getColor } from "../../utils/helper";

type Props = {
  healthCheck: HealthCheck | null;
};

const HealthItems = ({ healthCheck }: Props) => {
  const [name, setName] = useState<HealthCheckInfo | null>(null);

  function getGroupIcon(group: string): any {
    return group === "database" ? (
      <FaDatabase size="14px"></FaDatabase>
    ) : (
      <GiSpiderWeb size="14px"></GiSpiderWeb>
    );
  }

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
          style={{ fontSize: "10px" }}
          className="mb-1"
        >
          <Card.Header>
            <div className="card-header-font">
              {item.name.toLowerCase()}
              <div
                style={{
                  display: "flex",
                  columnGap: "5px",
                }}
                key={item.name}
              >
                <div className="card-icon">{getGroupIcon(item.group)}</div>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={popover}
                  rootClose={true} // Close the overlay when clicking outside
                >
                  <div
                    className="card-icon"
                    onClick={() => setName(item)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaCircleInfo size="14px"></FaCircleInfo>
                  </div>
                </OverlayTrigger>

                <a href={item?.wiki} target="_blank" className="card-icon_link">
                  <FaLink size="14px"></FaLink>
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
