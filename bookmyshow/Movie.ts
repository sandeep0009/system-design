export interface MovieProp {
  id: string;
  title: string;
  date: string;
  price: number;
}

export const globalMovies: Movie[] = [];

export class Movie implements MovieProp {
  public id: string;
  public title: string;
  public date: string;
  public price: number;

  constructor(id: string, title: string, date: string, price: number) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.price = price;
  }

  public async bookMovie(): Promise<void> {}

  public async getMovie(): Promise<Movie[]> {
    return globalMovies;
  }

  public async addMovie(): Promise<void> {
    globalMovies.push(this);
  }
}
