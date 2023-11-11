import { IconType } from "react-icons";
import { HealthCheck } from "./Types";
import React from "react";

import { FaDatabase } from "react-icons/fa6";
import { GiSpiderWeb } from "react-icons/gi";
;

export async function fetchHealthCheckInfo(): Promise<HealthCheck> {
  const response = await fetch(
    "https://healthcheck-ib.azurewebsites.net/api/v1/health/check"
  );
  if (!response.ok) throw new Error("Error fetching HealthCheck Information.");

  return (await response.json()) as HealthCheck;
}

export function getColor1(status: string): string {
  let color = "Light";
  switch (status) {
    case "healthy":
      color = "Primary";
      break;
    case "unhealthy":
      color = "danger";
      break;
    case "unknown":
      color = "warning";
      break;

    default:
      break;
  }
  return color;
}
export function getIcon(icon: IconType): any | undefined {
  return React.createElement(icon, {
    style: {
      width: "28px",
      height: "28px",
    },
  });

  return undefined;
}

export function getIconByName(name: string): any | undefined {
  switch (name) {
    case "database":
      return getIcon(FaDatabase);
      break;
    case "web":
      return getIcon(GiSpiderWeb);
      break;

    default:
      break;
  }

  return FaDatabase;
}

export function getColor(status: boolean): string {
  let color = "Light";
  switch (status) {
    case true:
      color = "success";
      break;
    case false:
      color = "danger";
      break;

    default:
      break;
  }
  return color;
}
