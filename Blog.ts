//
import { Model } from "./Model";
import { Eventing } from "./Eventing";

interface HasDesc {
  desc: string;
}

export class Blog<T> extends Model<T> {}
