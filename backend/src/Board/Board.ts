import { I18nService } from 'nestjs-i18n';
import { Task } from './Task';
import { Player } from './Player';

export class PlayerList {
  constructor(private players: Map<number, Player> = new Map<number,Player>()) {}

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
}


export class Board {
  playerList: PlayerList;
  tasks: Task[];
  activeTaskIndex?: number = null;
  constructor(private i18nService: I18nService) {
    this.playerList = new PlayerList();
    this.tasks = [];
  }

  addPlayer(player: string) {
    this.playerList.addPlayer(player);
  }

  getBoardPlayers() {
    return this.playerList.getPlayers();
  }

  addTask(task: string) {
    this.tasks.push(new Task(task)); 
    this.setActiveTask();
  }

  getTasks() {
    return this.tasks;
  }

  getActiveTaskTitle() {
    if (this.activeTaskIndex === null || !this.tasks[this.activeTaskIndex]) {
      return this.i18nService.translate('board.noActiveTask', {
        defaultValue: 'No active task :('
      });
    }
    const activeTask = this.tasks[this.activeTaskIndex];
    return this.i18nService.translate('board.activeTask', {
      defaultValue: 'The current active task is: {{title}}',
      args: {
        title: activeTask.title,
      }
    })
  }

  chooseTask(id: number) {
    this.activeTaskIndex = id;
  }

  getUserVote(id: number): number {
    return this.playerList.getUserVote(id);
  }
  
  vote(id: number, value: number): void | Error {
    if (this.activeTaskIndex === undefined) {
      throw new Error('No task added to vote');
    } 
    this.playerList.vote(id, value);
  }

  pointsAvg(): number {
    return this.playerList.pointsAvg();
  }

  private setActiveTask(id?: number) {
    if (id) {
      this.activeTaskIndex = id;
      return;
    }
    if (!this.activeTaskIndex && this.tasks.length > 0) {
      this.activeTaskIndex = 0;
    }
  }
}