import { IconType } from "react-icons";
import { HealthCheck } from "../models/HealthCheck";
import React from "react";
import { FaCircleInfo, FaDatabase, FaHeartCirclePlus } from "react-icons/fa6";
import { GiSpiderWeb } from "react-icons/gi";
import config from "../config/config.json";
import { MdDynamicFeed } from "react-icons/md";

export async function fetchHealthCheckInfo(): Promise<HealthCheck> {
  const response = await fetch(config.app.healthcheck.healthcheckRestEndpoint);
  if (!response.ok) throw new Error("Error fetching HealthCheck Information.");

  return (await response.json()) as HealthCheck;
}

export function getIcon(icon: IconType, size: string): any | undefined {
  return React.createElement(icon, {
    style: {
      width: size,
      height: size,
    },
  });

  return undefined;
}

export function getIconByName(
  name: string | undefined,
  size: string
): any | undefined {
  switch (name) {
    case "database":
      return getIcon(FaDatabase, size);
      break;
    case "web":
      return getIcon(GiSpiderWeb, size);
      break;
    case "MdDynamicFeed":
      return getIcon(MdDynamicFeed, size);
      break;
    case "FaHeartCirclePlus":
      return getIcon(FaHeartCirclePlus, size);
      break;
    case "FaCircleInfo":
      return getIcon(FaCircleInfo, size);
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

export function openExternalLink(url: string): void {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.focus();
  } else {
    console.error(
      "Unable to open external link. Please check your browser settings."
    );
  }
}
