import { useEffect, useState } from "react";
import { diContainer } from "../services/Container";
import { IEventManager, EventData } from "../services/EventManager";

const useEventManager = () => {
  const eventManager = diContainer.get<IEventManager>("EventManager");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const subscription = eventManager
      ?.eventData()
      .subscribe((event: EventData) => {
        setTheme(event.data);
      });
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return theme;
};

export default useEventManager;
