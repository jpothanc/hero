import { Badge } from "react-bootstrap";
import { HealthCheck } from "../../services/Types";

type Props = {
  healthCheck: HealthCheck | null;
};

const HealthMenuBar = ({ healthCheck }: Props) => {
  return (
    <>
      <div className="hc-container__top_right_bar">
        <div
          className="hc-item-menu"
          style={{
            backgroundColor: "#66BB6A",
          }}
        >
          healthy&nbsp;
          <Badge pill bg="light">
            {healthCheck?.healthyItems}
          </Badge>
        </div>

        <div className="hc-item-menu" style={{ backgroundColor: "#EF5350" }}>
          unhealthy&nbsp;
          <Badge pill bg="light">
            {healthCheck?.unhealthyItems}
          </Badge>
        </div>
        <div className="hc-item-menu">
          updated&nbsp;
          <Badge pill bg="light">
            {healthCheck?.timeStamp}
          </Badge>
        </div>
        <div className="hc-item-menu">
          duration&nbsp;
          <Badge pill bg="light">
            {healthCheck?.elapsed}
          </Badge>
        </div>
      </div>
    </>
  );
};

export default HealthMenuBar;
