import axios, { AxiosPromise } from "axios";
import { Eventing } from "./Eventing";

const URL = "http://localhost:3000/blogs";
//
export class Model<T> {
  data: T[] = [];

  constructor(public events: Eventing) {}

  on = this.events.on;

  setData(data: T[]): void {
    this.data = data;
    this.events.trigger("change");
  }

  fetch(): void {
    axios.get(URL).then((data: { data: T[] }) => {
      this.setData(data.data);
    });
  }
}
