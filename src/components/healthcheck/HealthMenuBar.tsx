import { Badge } from "react-bootstrap";
import { HealthCheck } from "../../models/HealthCheck";
import { LoadingStatus } from "../../models/LoadingStatus";

type Props = {
  healthCheck: HealthCheck | null;
  loadingStatus: LoadingStatus;
};

const renderBadge = (loadingStatus: LoadingStatus) => {
  if (loadingStatus.error) {
    return (
      <Badge pill bg="danger">
        <span>{loadingStatus.errorMessage}</span>
      </Badge>
    );
  }
  if (loadingStatus.loading) {
    return (
      <Badge pill bg="success">
        <span>loading..</span>
      </Badge>
    );
  }
  return (
    <Badge pill bg="success">
      <span>ready</span>
    </Badge>
  );
};

const HealthMenuBar = ({
  healthCheck,
  loadingStatus: loadingStatus,
}: Props) => {
  return (
    <>
      <div className="hc-container__top_right_bar">
        <div className="hc-item-menu">
          status&nbsp;
          {renderBadge(loadingStatus)}
        </div>

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
