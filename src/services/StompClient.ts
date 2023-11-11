import { Client, IFrame, Message } from "@stomp/stompjs";
import { injectable } from "inversify";

export interface IStompClient {
  connect(url: string, callback: (frame: IFrame) => void): Promise<void>;
  subscribe(destination: string, callback: (message: Message) => void): any;
  sendMessage(destination: string, body: string): void;
  disconnect(): void;
}

@injectable()
export class StompClient implements IStompClient {
  private client?: Client;

  public async connect(
    url: string,
    callback: (frame: IFrame) => void
  ): Promise<void> {
    console.log("StompClient connecting");
    this.client = new Client({
      brokerURL: url,
      debug: (str) => {
        console.log("error:" + str);
      },
      onConnect: (frame) => {
        console.log(" StompClient Connected: " + frame);
        callback(frame);
      },
    });
    this.client.activate();
  }

  subscribe(destination: string, callback: (message: Message) => void) {
    return this.client?.subscribe(destination, (message: Message) => {
      callback(message);
    });
  }

  sendMessage(destination: string, body: string) {
    this.client?.publish({
      destination,
      body,
    });
  }

  disconnect() {
    this.client?.deactivate();
  }
}
