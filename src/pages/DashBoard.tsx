import { Button, Card } from "react-bootstrap";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const variant = "Primary";
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/health");
  };
  return (
    <>
      <div className="dash-container">
        <div className="hc-container__body">
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <div className="dash-container">
                <div className="dash-icon">
                  <FaHeartCirclePlus size="24px"></FaHeartCirclePlus>
                </div>
                <div className="dash-text">health checks</div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                health checks for your production environment.
              </Card.Text>
              <Button onClick={handleButtonClick} variant="outline-success" size="sm">
                go...
              </Button>{" "}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
