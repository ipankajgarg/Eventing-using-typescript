import { Model } from "./Model";
//
interface HasDesc {
  desc: string;
}

export class Blog<T extends HasDesc> {
  constructor(public model: Model<T>) {
    model.fetch().then((data: { data: T[] }) => {
      const blogList = data.data;
      model.setData(blogList);
      this.render();
    });
  }

  render(): void {
    const blogList = this.model.data;
    for (var item of blogList) {
      var desc = document.createElement("p");
      desc.innerHTML = item.desc;

      var rootElement = document.getElementById("root");

      rootElement.appendChild(desc);
    }
  }
}
