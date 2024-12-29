import { TestingModule, Test } from '@nestjs/testing';
import { Board } from './Board';
import { I18nService, I18nModule } from 'nestjs-i18n';
import * as path from 'path';

describe('Board should', () => {
  let i18nService: I18nService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'en',
          loaderOptions: {
            path: path.join(__dirname, '../i18n/'),
            watch: false,
          }
        })
      ]
    }).compile();
    i18nService = module.get<I18nService>(I18nService);
  })
  it('return board with added players', () => {
    const board = new Board(i18nService);
    board.addPlayer('Fulano 1');
    board.addPlayer('Fulano 2');
    board.addPlayer('Fulano 3');
    const players = board.getBoardPlayers();
    expect(players.size).toBe(3);
  });

  it('return all task added', () => {
    const board = new Board(i18nService);
    board.addTask('Activity 1');
    board.addTask('Activity 2');
    board.addTask('Activity 3');
    const tasks = board.getTasks();
    expect(tasks.length).toBe(3);
  });
});

describe('When retriving active task board', () => {

  let i18nService: I18nService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'en',
          loaderOptions: {
            path: path.join(__dirname, '../i18n/'),
            watch: false,
          }
        })
      ]
    }).compile();
    i18nService = module.get<I18nService>(I18nService);
  })
  it('should return the message for no active task', () => {
    const board = new Board(i18nService);
    const message = board.getActiveTaskTitle();
    expect(message).toBe('No active task is set.');
  });

  it('should return the message for the active task', () => {
    const board = new Board(i18nService);
    board.addTask('Task 1');
    const message = board.getActiveTaskTitle();
    expect(message).toBe('The current active task is: Task 1');
  });

  it('should support Spanish translations', () => {
    const board = new Board(i18nService);
    jest.spyOn(i18nService, 'translate').mockImplementation((key, options: any) => {
      if (key === 'board.noActiveTask') return 'No hay ninguna tarea activa.';
      if (key === 'board.activeTask') return `La tarea activa actual es: ${options.args.title}`;
      return key;
    });

    board.addTask('Tarea 1');
    const message = board.getActiveTaskTitle();
    expect(message).toBe('La tarea activa actual es: Tarea 1');
  });

  it('should return new selected idea when choosing a new one', () => {
    const board = new Board(i18nService);
    board.addTask('Task 1');
    board.addTask('Task 2');
    board.addTask('Task 3');
    board.chooseTask(2);
    const message = board.getActiveTaskTitle();
    expect(message).toBe('The current active task is: Task 3');
  });

  it('should return no active task when id not added', () => {
    const board = new Board(i18nService);
    board.addTask('Task 1');
    board.chooseTask(2);
    const message = board.getActiveTaskTitle();
    expect(message).toBe('No active task is set.');
  });
  
});

describe('When voting task board', () => {
  let i18nService: I18nService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'en',
          loaderOptions: {
            path: path.join(__dirname, '../i18n/'),
            watch: false,
          }
        })
      ]
    }).compile();
    i18nService = module.get<I18nService>(I18nService);
  })
  it('should store vote by user id', () => {
    const board = new Board(i18nService);
    board.addTask('Activity 1');
    board.addPlayer('Fulano 1');
    board.vote(1, 21);
    const voteValue = board.getUserVote(1)
    expect(voteValue).toBe(21)
  });

  it('should throw an error when voting and no task added', () => {
    const board = new Board(i18nService);
    board.addPlayer('Fulano 1');
    expect(() => board.vote(1, 21)).toThrow('No task added to vote');
  });

  it('should calculate avg from votes', () => {
    const board = new Board(i18nService);
    board.addTask('Activity 1');
    let sum = 0;
    const players = ['Player 1', 'Player 2', 'Player 3'];
    players.forEach((name: string, index: number) => {
      board.addPlayer(name);
      let points = (index + 1) * 3
      sum += points;
      board.vote(index + 1, points);
    });
    const avg = sum / players.length;
    expect(board.pointsAvg()).toBe(avg)
  });

  it('should keep hidden points until all players have voted', () => {
    const board = new Board(i18nService);
    board.addTask('Task 1');
    board.addPlayer('Fulano 1');
    board.addPlayer('Fulano 2');
  });
});