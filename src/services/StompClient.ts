import { Client, IFrame, Message } from "@stomp/stompjs";

class StompClient {
  private client?: Client;

  constructor(private url: string) {}

  public async connect(callback: (frame: IFrame) => void):Promise<void> {
    console.log("StompClient connecting");
    this.client = new Client({
      brokerURL: this.url,
      debug: (str) => {
        console.log("error:" + str);
      },
      onConnect: (frame) => {
        console.log(" StompClient Connected: " + frame);
        callback(frame);
        // ...
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

export default StompClient;
