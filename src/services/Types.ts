export type Service = {
  name: string;
  description: string;
  group: string;
  status: string;
  error: string;
  link: string;
};

export type HealthCheck = {
  items: number;
  healthyItems: number;
  unhealthyItems: number;
  elapsed: number;
  timeStamp: string;
  healthy: boolean;
  healthCheckItems: HealthCheckInfo[];
};

export type HealthCheckInfo = {
  name: string;
  description: string;
  group: string;
  wiki: string;
  status: string;
  error: string;
  healthQuery: string;
  elapsed: string;
  timestamp: string;
  healthy: boolean;
};
