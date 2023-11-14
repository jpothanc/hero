import { Badge } from "react-bootstrap";
import { HealthCheck } from "../../models/HealthCheck";

type Props = {
  healthCheck: HealthCheck | null;
};

const HealthMenuBar = ({ healthCheck }: Props) => {
  return (
    <>
      <div className="hc-container__top_right_bar">
        <div className="hc-item-menu">
          healthy&nbsp;
          <Badge pill bg="success">
            <span className="hc-pill_menu ">{healthCheck?.healthyItems}</span>
          </Badge>
        </div>

        <div className="hc-item-menu">
          unhealthy&nbsp;
          <Badge pill bg="danger">
            <span className="hc-pill_menu ">{healthCheck?.unhealthyItems}</span>
          </Badge>
        </div>
        <div className="hc-item-menu">
          last&nbsp;
          <Badge pill bg="light">
            <span className="hc-pill_menu ">{healthCheck?.timeStamp}</span>
          </Badge>
        </div>
        <div className="hc-item-menu">
          duration&nbsp;
          <Badge pill bg="light">
            <span className="hc-pill_menu ">{healthCheck?.elapsed}</span>
          </Badge>
        </div>
      </div>
    </>
  );
};

export default HealthMenuBar;
