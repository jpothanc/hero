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
            updated
          </Badge>
        </div>
        <div className="hc-item" style={{ backgroundColor: color }}>
          {HealthCheckInfo?.elapsed}&nbsp;
          <Badge pill bg="light">
            duration
          </Badge>
        </div>
        {error?.length > 0 && (
          <div className="hc-item" style={{ backgroundColor: color }}>
            {error}&nbsp;
            <Badge pill bg="light" text="danger">
              error
            </Badge>
          </div>
        )}
      </div>
    </>
  );
};

export default HealthInfoQuickDetails;
