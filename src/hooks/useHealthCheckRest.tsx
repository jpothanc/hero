import { useEffect } from "react";
import { HealthCheck } from "../models/HealthCheck";
import { LoadingStatus } from "../models/LoadingStatus";
import config from "../config/config.json";
import { fetchHealthCheckInfo } from "../utils/helper";

let intervalId: NodeJS.Timeout | undefined = undefined;
const interval = config.app.healthcheck.queryIntervalRest * 1000;

type Props = {
  setHealthCheck: (arg0: HealthCheck | null) => void;

  // This type definition indicates that setLoadingStatus is a function that accepts a single argument (arg0).
  // This argument can be either:
  // A LoadingStatus Object: This directly sets the state to a new LoadingStatus object.
  // A Function: This function takes the previous state (prev) as an argument and returns a new LoadingStatus object.
  // This is often used when the new state depends on the previous state.

  setLoadingStatus: (
    arg0: LoadingStatus | ((prev: LoadingStatus) => LoadingStatus)
  ) => void;
};

const useHealthCheckRest = ({ setHealthCheck, setLoadingStatus }: Props) => {
  useEffect(() => {
    const loadHealthCheckInfo = async () => {
      try {
        setLoadingStatus({
          loading: true,
          error: false,
          errorMessage: "",
        });
        const data = await fetchHealthCheckInfo();
        setHealthCheck(data);
        console.log("loadHealthCheckInfo..");
      } catch (error: string | any) {
        console.log(" error loadHealthCheckInfo");
        setHealthCheck(null);
        setLoadingStatus((prev) => ({
          ...prev,
          error: true,
          errorMessage: "failed to load healthchecks",
        }));
      } finally {
        setLoadingStatus((prev) => ({
          ...prev,
          loading: false,
        }));
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
