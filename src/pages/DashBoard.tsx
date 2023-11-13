import config from "../config.json";
import DashBoardItem from "../components/DashBoardItem";

const DashBoard = () => {
  return (
    <>
      <div className="dash-container">
        <div className="hc-container__body">
          {config.app.dashItems.map((dashItem) => (
            <DashBoardItem dashItem={dashItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
