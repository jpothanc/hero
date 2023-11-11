import { useEffect, useState } from "react";
import HealthMenuBar from "../components/healthcheck/HealthMenuBar";
import HealthItems from "../components/healthcheck/Healthtems";
import { fetchHealthCheckInfo } from "../services/Helper";
import { HealthCheck } from "../services/Types";
import useWebSockets from "../hooks/useHeathCheckSockets";
import { FaHeartCirclePlus } from "react-icons/fa6";

const HealthCheckDashBoard = () => {
  
  const [healthCheck, setHealthCheck] = useState<HealthCheck | null>(null);
  useWebSockets({ setHealthCheck });

  useEffect(() => {
    const loadHealthCheckInfo = async () => {
      try {
        const data = await fetchHealthCheckInfo();
        setHealthCheck(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadHealthCheckInfo();
    return () => {};
  }, []);

  return (
    <>
      <div className="hc-container">
        <div className="hc-container__top_left_bar">
          <FaHeartCirclePlus size="20"></FaHeartCirclePlus>
          &nbsp;&nbsp;health check dashboard
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
