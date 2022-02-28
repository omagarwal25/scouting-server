export interface Schedule {
  Schedule: Game[];
}

export interface Game {
  field: Field;
  tournamentLevel: TournamentLevel;
  description: string;
  startTime: string;
  matchNumber: number;
  teams: Team[];
}

export enum Field {
  Primary = 'Primary',
}

export interface Team {
  teamNumber: number;
  station: Station;
  surrogate: boolean;
}

export enum Station {
  Blue1 = 'Blue1',
  Blue2 = 'Blue2',
  Blue3 = 'Blue3',
  Red1 = 'Red1',
  Red2 = 'Red2',
  Red3 = 'Red3',
}

export enum TournamentLevel {
  Playoff = 'Playoff',
}
