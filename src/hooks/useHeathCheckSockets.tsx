import { useEffect } from "react";
import { diContainer } from "../services/Container";
import { IStompClient } from "../services/StompClient";
import { HealthCheck } from "../services/Types";
import config from "../config.json";

type Props = {
  setHealthCheck: (arg0: HealthCheck) => void;
};

const useWebSockets = ({ setHealthCheck }: Props) => {
  const stompClient = diContainer.get<IStompClient>("StompClient");

  useEffect(() => {
    stompClient.connect(
      config.app.healthcheck.healthcheckWsEndpoint,
      (frame) => {
        frame.body;
        stompClient?.subscribe(
          config.app.healthcheck.healthcheckWsTopic,
          (message) => {
            console.log(`Received message: ${message.body}`);
            const data = JSON.parse(message.body) as HealthCheck;
            setHealthCheck(data);
          }
        );
      }
    );

    return () => {
      console.log("Disconnecting WebSocket");
      stompClient.disconnect();
    };
  }, []);
};

export default useWebSockets;
