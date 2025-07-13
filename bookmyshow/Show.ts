import type { MovieProp } from "./Movie";
import type { Seat } from "./Seat";

export interface ShowProp {
  movie: MovieProp;
  seat: Seat[];
  time: string;
}

export const globalShows: Show[] = [];

export class Show implements ShowProp {
  public movie: MovieProp;
  public seat: Seat[];
  public time: string;

  constructor(movie: MovieProp, seat: Seat[], time: string) {
    this.movie = movie;
    this.seat = seat;
    this.time = time;
  }

  public async getShow(): Promise<Show[]> {
    return globalShows;
  }

  public async getShowById(id: string): Promise<Show | undefined> {
    return globalShows.find((show) => show.movie.id === id);
  }

  public async addShow(): Promise<void> {
    globalShows.push(this);
  }
}
