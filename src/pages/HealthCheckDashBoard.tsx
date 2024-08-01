import { useState } from "react";
import HealthMenuBar from "../components/healthcheck/HealthMenuBar";
import HealthItems from "../components/healthcheck/Healthtems";
import { HealthCheck } from "../models/HealthCheck";
import { LoadingStatus } from "../models/LoadingStatus";
import useWebSockets from "../hooks/useHeathCheckSockets";
import { FaHeartCirclePlus } from "react-icons/fa6";

import useHealthCheckRest from "../hooks/useHealthCheckRest";

const HealthCheckDashBoard = () => {
  const [healthCheck, setHealthCheck] = useState<HealthCheck | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>({
    loading: false,
    error: false,
    errorMessage: "",
  });

  useHealthCheckRest({ setHealthCheck, setLoadingStatus });
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
        <HealthMenuBar
          healthCheck={healthCheck}
          loadingStatus={loadingStatus}
        />
      </div>
      <div className="hc-container__body">
        <HealthItems healthCheck={healthCheck} />
      </div>
    </>
  );
};

export default HealthCheckDashBoard;
