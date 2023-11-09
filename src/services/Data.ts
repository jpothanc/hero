import { Service } from "./Types";

export const Services: Service[] = [
  {
    name: "vision",
    description: "Order visibility service",
    group: "microservices",
    status: "unknown",
    error: "No response.",
    link: "",
  },
  {
    name: "validation-service",
    description: "Order validation service",
    group: "microservices",
    status: "healthy",
    error: "",
    link: "",
  },
  {
    name: "smd",
    description: "Product Database",
    group: "databases",
    status: "healthy",
    error: "",
    link: "",
  },
];
