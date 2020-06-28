import axios, { AxiosPromise } from "axios";

const URL = "http://localhost:3000/blogs";

export class Model<T> {
  data: T[] = [];

  setData(data: T[]): void {
    this.data = data;
  }

  fetch(): AxiosPromise {
    return axios.get(URL);
  }
}
