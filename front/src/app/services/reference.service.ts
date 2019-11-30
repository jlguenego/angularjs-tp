import { Reference } from '../interfaces/Reference';

export class ReferenceService {
  references = this.getReferences();

  add(ref: Reference) {
    console.log('adding ref: ', ref);
    this.references.push(ref);
    this.setReferences();
  }

  setReferences() {
    localStorage.setItem('references', JSON.stringify(this.references));
  }

  getReferences(): Reference[] {
    const str = localStorage.getItem('references');
    if (!str) {
      return [];
    }
    return JSON.parse(str);
  }
}
