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

export type DashItem = {
  icon: string;
  title: string;
  description: string;
  routeType: string;
  route: string;
};
