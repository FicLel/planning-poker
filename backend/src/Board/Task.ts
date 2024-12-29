
export class Task {
  constructor(private _title: string) { }

  get title() {
    return this._title;
  }
}
