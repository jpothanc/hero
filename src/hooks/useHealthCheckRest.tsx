import { useEffect } from "react";
import { HealthCheck } from "../models/HealthCheck";
import config from "../config/config.json";
import { fetchHealthCheckInfo } from "../utils/helper";

let intervalId: NodeJS.Timeout | undefined = undefined;
const interval = config.app.healthcheck.queryIntervalRest * 1000;

type Props = {
  setHealthCheck: (arg0: HealthCheck) => void;
};

const useHealthCheckRest = ({ setHealthCheck }: Props) => {
  useEffect(() => {
    const loadHealthCheckInfo = async () => {
      try {
        const data = await fetchHealthCheckInfo();
        setHealthCheck(data);
        console.log(data.unhealthyItems);
        console.log("loadHealthCheckInfo");
      } catch (error) {
        console.log(error);
      }
    };

    loadHealthCheckInfo();

    if (config.app.healthcheck.queryIntervalRest > 0) {
      intervalId = setInterval(loadHealthCheckInfo, interval); // Refresh every x seconds
    }

    return () => {
      if (config.app.healthcheck.queryIntervalRest > 0)
        clearInterval(intervalId);
    };
  }, []);
};

export default useHealthCheckRest;
