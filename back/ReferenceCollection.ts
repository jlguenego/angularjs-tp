import { Reference } from "../front/src/app/interfaces/Reference";

export class ReferenceCollection {
  refs: Reference[] = [];
  push(ref: Reference): Reference {
    const data: Reference = { ...ref, id: this.newId() };
    this.refs.push(data);
    return data;
  }

  newId(): string {
    const id = Math.max(0, ...this.refs.map(d => +d.id));
    return `${id + 1}`;
  }
}
