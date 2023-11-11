import { Badge } from "react-bootstrap";
import { HealthCheckInfo } from "../../services/Types";
type Props = {
  HealthCheckInfo: HealthCheckInfo | null;
  color: string;
  error: string;
};

const HealthInfoQuickDetails = ({ HealthCheckInfo, color, error }: Props) => {
  return (
    <>
      <div>
        <div className="hc-item" style={{ backgroundColor: color }}>
          {HealthCheckInfo?.timestamp}&nbsp;
          <Badge pill bg="light">
            <span className="hc-quick">updated</span>
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: color }}>
          {HealthCheckInfo?.elapsed}&nbsp;
          <Badge pill bg="light">
            <span className="hc-quick">duration</span>
          </Badge>
        </div>
        {error?.length > 0 && (
          <div className="hc-item" style={{ backgroundColor: color }}>
            {error}&nbsp;
            <Badge pill bg="dark" text="danger">
              <span className="hc-quick">error</span>
            </Badge>
          </div>
        )}
      </div>
    </>
  );
};

export default HealthInfoQuickDetails;
