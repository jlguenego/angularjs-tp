export class ReferenceCollection {
  refs = [];
  push(ref: any) {
    const data = { ...ref, id: this.newId() };
    this.refs.push(data);
    return data;
  }

  newId(): number {
    const id = Math.max(0, ...this.refs.map(d => d.id));
    return id + 1;
  }
}
