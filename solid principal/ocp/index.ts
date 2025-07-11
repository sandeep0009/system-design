

// open closed principal states that classes modules function etc should be open to extension but closed for modification



interface DiscountCalculator {
  title: string;
  discountPercent: number;
  calculateDiscount(amount: number): number;
}


export class StudentDiscount implements DiscountCalculator {
  title: string;
  discountPercent: number;

  constructor(title: string, discountPercent: number) {
    this.title = title;
    this.discountPercent = discountPercent;
  }

  public calculateDiscount(amount: number): number {
    return amount - (amount * this.discountPercent) / 100;
  }
}

export class EmployeeDiscount implements DiscountCalculator {
  title: string;
  discountPercent: number;

  constructor(title: string, discountPercent: number) {
    this.title = title;
    this.discountPercent = discountPercent;
  }

  public calculateDiscount(amount: number): number {
    return amount - (amount * (this.discountPercent + 5)) / 100;
  }
}

