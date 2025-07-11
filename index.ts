import { User } from "./basicClass";
import { UserProfile } from "./design patterns/builder";
import { BankAccount } from "./encapsulation";
import { Cars, Vehicle } from "./inheritance";
import { Penguin, Sparrow, type Bird, type IFlyble } from "./solid principal/liskov substitution principal";
import { EmployeeDiscount, StudentDiscount } from "./solid principal/ocp";
import { ReportGenerator, ReportPrinter } from "./solid principal/srp";

const user1= new User('alice' , 'alice@gmail.com');
user1.login();


const veh1=new Vehicle('x21','red');
veh1.start();


const veh2=new Cars('y21','black','honda');
veh2.start();


const acc1=new BankAccount('bob',12345);
acc1.deposit(2000);

acc1.withdraw(12345,1000);

const generator = new ReportGenerator();
generator.generateRport("1", [{ Math: 90, English: 85 }], "John Doe", "10A");

const printer=new ReportPrinter();
printer.printReports();


const student = new StudentDiscount("Student Plan", 10);
const employee = new EmployeeDiscount("Employee Plan", 15);

console.log(student.calculateDiscount(1000));  
console.log(employee.calculateDiscount(1000)); 




const birds: Bird[] = [
  new Sparrow("Jack the Sparrow"),
  new Penguin("Percy the Penguin"),
];

for (const bird of birds) {
  bird.eat();
  if ("fly" in bird) {
    (bird as IFlyble).fly();
  } else if (bird instanceof Penguin) {
    bird.swim();
  }
}


const user = UserProfile
  .builder()
  .setName("Random Shah")
  .setEmail("random@example.com")
  .setAge(23)
  .setPhone(9876543210)
  .setSocialLinks(["https://linkedin.com/in/random", "https://github.com/random"])
  .build();

console.log(user);