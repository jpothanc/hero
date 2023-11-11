import { Badge } from "react-bootstrap";
import { HealthCheckInfo } from "../../services/Types";
type Props = {
  HealthCheckInfo: HealthCheckInfo | null;
};

const HealthInfoDetails = ({ HealthCheckInfo }: Props) => {
  return (
    <>
      <div
        style={{
          padding: "4px",
          backgroundColor: "#ECEFF1",
        }}
      >
        <div className="hc-item" style={{ backgroundColor: "#ECEFF1" }}>
          {HealthCheckInfo?.healthy ? "true" : "false"}&nbsp;
          <Badge pill bg="success">
            healthy
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.name}&nbsp;
          <Badge pill bg="success">
            name
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#ECEFF1" }}>
          {HealthCheckInfo?.description}&nbsp;
          <Badge pill bg="success">
            description
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.group}&nbsp;
          <Badge pill bg="success">
            group
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#ECEFF1" }}>
          {HealthCheckInfo?.wiki}&nbsp;
          <Badge pill bg="success">
            wiki
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.timestamp}&nbsp;
          <Badge pill bg="success">
            updated
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: "#ECEFF1" }}>
          {HealthCheckInfo?.elapsed}&nbsp;
          <Badge pill bg="success">
            duration
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.healthQuery}&nbsp;
          <Badge pill bg="success">
            healthQuery
          </Badge>
        </div>
      </div>
    </>
  );
};

export default HealthInfoDetails;
