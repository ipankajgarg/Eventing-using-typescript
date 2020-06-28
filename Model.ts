import axios, { AxiosPromise } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

//
export class Model<T> {
  data: T[] = [];

  constructor(public events: Eventing, public sync: Sync<T>) {}

  on = this.events.on;

  setData(data: T[]): void {
    this.data = data;
    this.events.trigger("change");
  }

  fetch(): void {
    this.sync.fetch().then((data: { data: T[] }) => {
      this.setData(data.data);
    });
  }
}
