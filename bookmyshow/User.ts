import type { Booking } from "./Booking";

export interface UserProp {
  name: string;
  bookings: Booking[];
}

export class User implements UserProp {
  public name: string;
  public bookings: Booking[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public async book(booking: Booking): Promise<void> {
    await booking.confirmBooking();
    this.bookings.push(booking);
  }

  public async getBookings(): Promise<Booking[]> {

    return this.bookings;
  }
}
