export interface Events {
  [key: string]: Function[];
}

export class Eventing {
  events: Events = {};

  on(eventName: string, callback: () => void): void {
    var arr = this.events[eventName] || [];

    arr.push(callback);
    this.events[eventName] = arr;
  }

  trigger(eventName: string) {
    for (var event of this.events[eventName]) {
      event();
    }
  }
}
