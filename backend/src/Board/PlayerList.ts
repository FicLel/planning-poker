import { Player, PlayerDto } from './Player';


export class PlayerList {
  constructor(private players: Map<number, Player> = new Map<number, Player>()) { }

  addPlayer(name: string) {
    const id = this.players.size + 1;
    this.players.set(id, new Player(name, id));
  }

  getPlayers() {
    return this.players;
  }

  getUserVote(id: number) {
    return this.players.get(id).vote;
  }

  vote(id: number, value: number) {
    const player = this.players.get(id);
    player.addVote(value);
    this.players.set(id, player);
  }

  pointsAvg(): number {
    let sumPoints = 0;
    this.players.forEach((player: Player) => {
      sumPoints += player.vote;
    });
    return sumPoints / this.players.size;
  }

  getListOfPlayers(): PlayerDto[] {
    const players = Array.from(this.players.values());
    return players.map((player) => player.toDto());
  }

  allPlayersHaveVoted(): boolean {
    for (let player of this.players.values()) {
      if (player.vote < 0) return false;
    }
    return true;
  }
}
