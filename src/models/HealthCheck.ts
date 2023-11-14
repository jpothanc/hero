import { HealthCheckInfo } from "./HealthCheckInfo";

export type HealthCheck = {
  items: number;
  healthyItems: number;
  unhealthyItems: number;
  elapsed: number;
  timeStamp: string;
  healthy: boolean;
  healthCheckItems: HealthCheckInfo[];
};
