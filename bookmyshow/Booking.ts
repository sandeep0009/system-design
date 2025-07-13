import type { ShowProp } from "./Show";
import type { Seat } from "./Seat";

export interface BookingProp {
  date: string;
  theater: string;
  show: ShowProp;
  seat: Seat[];
}

export const globalBookings: Booking[] = [];

export class Booking implements BookingProp {
  public date: string;
  public theater: string;
  public show: ShowProp;
  public seat: Seat[];

  constructor(date: string, theater: string, show: ShowProp, seat: Seat[]) {
    this.date = date;
    this.theater = theater;
    this.show = show;
    this.seat = seat;
  }

  public async confirmBooking(): Promise<void> {
    for (const s of this.seat) {
      await s.bookSeat();
    }
    globalBookings.push(this);
  }

  public async getBookings(): Promise<Booking[]> {
    return globalBookings;
  }
}
