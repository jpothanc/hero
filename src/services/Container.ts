import { Container } from "inversify";
import { IEventManager, EventManager } from "./EventManager";

export const diContainer = new Container();

diContainer
  .bind<IEventManager>("EventManager")
  .to(EventManager)
  .inSingletonScope();
