import { I18nService } from 'nestjs-i18n';
import { Task } from './Task';
import { PlayerList } from './PlayerList';

export class Board {
  playerList: PlayerList;
  tasks: Task[];
  activeTaskIndex: number | null = null;
  hidden: boolean = true;

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
    if (this.activeTaskIndex === null) {
      throw new Error('No task added to vote');
    } 
    this.playerList.vote(id, value);
    this.updateStatus();
  }

  pointsAvg(): number {
    return this.playerList.pointsAvg();
  }

  getStatus() {
    if (this.hidden) return;

    return {
      players: this.playerList.getListOfPlayers(),
      average: this.playerList.pointsAvg(),
    }
    
  }

  private updateStatus() {
    if (
      this.playerList.allPlayersHaveVoted() &&
      this.tasks.length === this.activeTaskIndex + 1
    ) {
      this.hidden = false;
      return;
    }
    if (this.playerList.allPlayersHaveVoted()) {
      this.activeTaskIndex += 1;
    }
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