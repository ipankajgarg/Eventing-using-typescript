import { Blog } from "./Blog";
import { Model } from "./Model";
//
interface BlogContent {
  id: number;
  desc: string;
}

var BlogPost = new Blog<BlogContent>(new Model<BlogContent>());

BlogPost.render();
