export interface SeatProp {
  id: string;
  seatNumber: number;
  isBooked?: boolean;
}

export class Seat implements SeatProp {
  public id: string;
  public seatNumber: number;
  public isBooked: boolean = false;

  constructor(id: string, seatNumber: number) {
    this.id = id;
    this.seatNumber = seatNumber;
  }

  public async bookSeat(): Promise<void> {
    this.isBooked = true;
  }

  public async getSeat(): Promise<Seat> {
    return this;
  }
}
