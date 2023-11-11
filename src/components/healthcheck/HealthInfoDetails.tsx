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
          backgroundColor: "#757575",
        }}
      >
        <div className="hc-item" style={{ backgroundColor: "#BDBDBD" }}>
          {HealthCheckInfo?.healthy ? "true" : "false"}&nbsp;
          <Badge pill bg="success">
            healthy
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#9E9E9E" }}>
          {HealthCheckInfo?.name}&nbsp;
          <Badge pill bg="success">
            name
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#BDBDBD" }}>
          {HealthCheckInfo?.description}&nbsp;
          <Badge pill bg="success">
            description
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#9E9E9E" }}>
          {HealthCheckInfo?.group}&nbsp;
          <Badge pill bg="success">
            group
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#BDBDBD" }}>
          {HealthCheckInfo?.wiki}&nbsp;
          <Badge pill bg="success">
            wiki
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#9E9E9E" }}>
          {HealthCheckInfo?.timestamp}&nbsp;
          <Badge pill bg="success">
            updated
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: "#BDBDBD" }}>
          {HealthCheckInfo?.elapsed}&nbsp;
          <Badge pill bg="success">
            duration
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: "#9E9E9E" }}>
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
