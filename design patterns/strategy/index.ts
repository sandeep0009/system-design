

// Strategy pattern is used when we have multiple algorithm for a specific task and client decides the actual implementation to be used at runtime.


interface IPaymentStrategy{
    payamount(money:number):void;

}

export class UPIPayment implements IPaymentStrategy{
    public upiId:string;

    constructor(upiId:string){
        this.upiId=upiId;
    }


   payamount(money: number): void {
       
   }

}

export class CardPayment implements IPaymentStrategy{
    private cardNumber:number;
    constructor(cardNumber:number){
        this.cardNumber=cardNumber;
    }
    payamount(money: number): void {
        
    }


}


export class NetBanking implements IPaymentStrategy{
    private cardDetails:string;
    constructor(cardDetails:string){
        this.cardDetails=cardDetails;
    }
    payamount(money: number): void {
        
    }


}
export class Payment{
    private static instance:Payment;
    private  paymentStratgey:IPaymentStrategy;

    private constructor() {
        
    }

    static getInstance():Payment{
        if(!Payment.instance){
            Payment.instance=new Payment();

        }
        return Payment.instance;
    }

    public setStrategy(strategy:IPaymentStrategy):void{
        this.paymentStratgey=strategy
    }

     public processPayment(amount: number): void {
        if (!this.paymentStratgey) {
            console.log("Payment strategy not set.");
            return;
        }
        this.paymentStratgey.payamount(amount);
    }

   
}