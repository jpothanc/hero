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
            <span className="hc-pill">healthy</span>
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.name}&nbsp;
          <Badge pill bg="success">
            <span className="hc-pill">name</span>
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#ECEFF1" }}>
          {HealthCheckInfo?.description}&nbsp;
          <Badge pill bg="success">
            <span className="hc-pill">description</span>
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.group}&nbsp;
          <Badge pill bg="success">
            <span className="hc-pill">group</span>
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#ECEFF1" }}>
          <a
            href={HealthCheckInfo?.wiki}
            target="_blank"
            className="card-icon_link"
          >
            {HealthCheckInfo?.wiki}
          </a>
          &nbsp;
          <Badge pill bg="success">
            <span className="hc-pill">wiki</span>
          </Badge>
        </div>

        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.timestamp}&nbsp;
          <Badge pill bg="success">
            <span className="hc-pill">updated</span>
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: "#ECEFF1" }}>
          {HealthCheckInfo?.elapsed}&nbsp;
          <Badge pill bg="success">
            <span className="hc-pill">duration</span>
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: "#CFD8DC" }}>
          {HealthCheckInfo?.healthQuery}&nbsp;
          <Badge pill bg="success">
            <span className="hc-pill">healthQuery</span>
          </Badge>
        </div>
      </div>
    </>
  );
};

export default HealthInfoDetails;
