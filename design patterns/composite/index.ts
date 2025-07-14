import { File } from "./File";
import { Folder } from "./Folder";

const root = new Folder("Root");
const file1 = new File("README.md");
const file2 = new File("LICENSE");

const src = new Folder("src");
src.add(new File("index.ts"));
src.add(new File("utils.ts"));

root.add(file1);
root.add(file2);
root.add(src);

root.display();
