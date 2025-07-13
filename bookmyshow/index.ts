import { Movie } from "./Movie";
import { Seat } from "./Seat";
import { Show } from "./Show";
import { Booking } from "./Booking";
import { User } from "./User";


const movie = new Movie("m1", "Inception", "2025-07-20", 250);
await movie.addMovie();

const seat1 = new Seat("s1", 1);
const seat2 = new Seat("s2", 2);
const seat3 = new Seat("s3", 3);


const show = new Show(movie, [seat1, seat2, seat3], "19:00");
await show.addShow();


const user = new User("Random Shah");

const booking = new Booking("2025-07-20", "PVR Noida", show, [seat1, seat2]);

await user.book(booking);

console.log(JSON.stringify(await user.getBookings(), null, 2));




