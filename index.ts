import { Blog } from "./Blog";
import { Model } from "./Model";
import { Eventing } from "./Eventing";

console.log("Hi there");
//
interface BlogContent {
  id: number;
  desc: string;
}

var BlogPost = new Blog<BlogContent>(new Eventing());

BlogPost.events.on("change", () => {
  const blogList = BlogPost.data;
  for (var item of blogList) {
    var desc = document.createElement("p");
    desc.innerHTML = item.desc;

    var rootElement = document.getElementById("root");

    rootElement.appendChild(desc);
  }
});

BlogPost.fetch();
