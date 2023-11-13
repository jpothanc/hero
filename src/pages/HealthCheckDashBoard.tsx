import { useState } from "react";
import HealthMenuBar from "../components/healthcheck/HealthMenuBar";
import HealthItems from "../components/healthcheck/Healthtems";
import { HealthCheck } from "../services/Types";
import useWebSockets from "../hooks/useHeathCheckSockets";
import { FaHeartCirclePlus } from "react-icons/fa6";

import useHealthCheckRest from "../hooks/useHealthCheckRest";

const HealthCheckDashBoard = () => {
  const [healthCheck, setHealthCheck] = useState<HealthCheck | null>(null);

  useHealthCheckRest({ setHealthCheck });
  useWebSockets({ setHealthCheck });

  return (
    <>
      <div className="hc-container">
        <div className="hc-container__top_left_bar">
          <div className="dash-icon">
            <FaHeartCirclePlus size="20px"></FaHeartCirclePlus>
          </div>
          <div className="dash-text">health checks</div>
        </div>
        <HealthMenuBar healthCheck={healthCheck} />
      </div>
      <div className="hc-container__body">
        <HealthItems healthCheck={healthCheck} />
      </div>
    </>
  );
};

export default HealthCheckDashBoard;
