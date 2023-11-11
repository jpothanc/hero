import { Container } from "inversify";
import { IEventManager, EventManager } from "./EventManager";
import { StompClient, IStompClient } from "./StompClient";

export const diContainer = new Container();

diContainer
  .bind<IEventManager>("EventManager")
  .to(EventManager)
  .inSingletonScope();

diContainer
  .bind<IStompClient>("StompClient")
  .to(StompClient)
  .inSingletonScope();
