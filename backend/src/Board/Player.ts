export class Player {
  private _vote: number = -1;
  constructor(private _name: string, private _id: number) { }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get vote() {
    return this._vote;
  }

  addVote(value: number) {
    this._vote = value;
  }

  toDto(): PlayerDto {
    return {
      name: this._name,
      points: this._vote
    }
  }
}

export interface PlayerDto {
  name: string;
  points: number;
}
