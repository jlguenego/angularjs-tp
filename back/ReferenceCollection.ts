import { Reference } from "../front/src/app/interfaces/Reference";
import * as fs from "fs";
import * as path from "path";

const filename = path.resolve(__dirname, 'data.json');

export class ReferenceCollection {
  refs = this.getRefs();
  push(ref: Reference): Reference {
    const data: Reference = { ...ref, id: this.newId() };
    this.refs.push(data);
    fs.writeFileSync(filename, JSON.stringify(this.refs));
    return data;
  }

  newId(): string {
    const id = Math.max(0, ...this.refs.map(d => +d.id));
    return `${id + 1}`;
  }

  getRefs(): Reference[] {
    try {
      const str = fs.readFileSync(filename, {encoding: 'utf8'});
      return JSON.parse(str);
    } catch (e) {
      return [];
    }
  }
}
