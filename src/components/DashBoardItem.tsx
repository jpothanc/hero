import { Button, Card } from "react-bootstrap";
import { DashItem } from "../models/HealthCheckInfo";
import { getIconByName, openExternalLink } from "../utils/helper";
import { useNavigate } from "react-router";

type Props = {
  dashItem: DashItem | null;
};

const DashBoardItem = ({ dashItem }: Props) => {
  const variant = "Primary";
  const navigate = useNavigate();

  const routePage = (route: string, type: string) => {
    if (type === "internal") navigate(route);
    else openExternalLink(route);
  };

  return (
    <>
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>
          <div className="dash-header">
            <div className="dash-icon">
              {getIconByName(dashItem?.icon, "20px")}
            </div>
            <div className="dash-text">{dashItem?.title}</div>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="dash-content-container">
            <div className="dash-content">
              <Card.Text>{dashItem?.description}</Card.Text>
            </div>
            <div className="dash-nav">
              <Button
                onClick={() =>
                  routePage(
                    dashItem?.route || "/",
                    dashItem?.routeType || "internal"
                  )
                }
                variant="outline-success"
                size="sm"
              >
                go...
              </Button>{" "}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DashBoardItem;
