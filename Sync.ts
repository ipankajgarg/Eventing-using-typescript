import axios, { AxiosPromise } from "axios";

const URL = "http://localhost:3000/blogs";

export class Sync<T> {
  fetch(): AxiosPromise {
    return axios.get(URL);
  }
}
