


type DepositeArray=
    {
        bankName:string;
        accountNumber:number;
        money:number;
    }[];

export class BankAccount{
    public bankName:string;
    private accountNumber:number;
    constructor(bankName:string,accountNumber:number){
        this.bankName=bankName;
        this.accountNumber=accountNumber;
        console.log('initated bank process');
    }

    private depositeArray:DepositeArray=[];
    public deposit(value:number):void{
        const users={
            bankName: this.bankName,
            accountNumber:this.accountNumber,
            money:value
        }
        this.depositeArray.push(users);
        console.log('value deposited');
    }
  public withdraw(accountNumber: number, money: number): void {
    if (this.accountNumber !== accountNumber) {
        console.log('Account number is not matching');
        return;
    }

    const user = this.depositeArray.find(item => item.accountNumber === accountNumber);

    if (!user) {
        console.log('No deposit record found for this account');
        return;
    }

    if (user.money >= money) {
        user.money -= money;
        console.log(`₹${money} withdrawn successfully. Remaining balance: ₹${user.money}`);
    } else {
        console.log('Insufficient funds');
    }
}

}