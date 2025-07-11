

interface INotificatoin {
    sendMessage(message: string): void;
}

export class EmailNotification implements INotificatoin {
    sendMessage(message: string): void {
        console.log(`Send message using email noittifaciton: ${message}`)
    }

}


export class SMSNotification implements INotificatoin {
    sendMessage(message: string): void {
        console.log(`Send message using sms noittifaciton: ${message}`)
    }

}

export class PushNotification implements INotificatoin {
    sendMessage(message: string): void {
        console.log(`Send message using push noittifaciton: ${message}`)
    }

}

export class Notification {

    private notify: INotificatoin;

    constructor(notify: INotificatoin) {
        this.notify = notify;
    }

    public static getInstacnce(channel: string): INotificatoin {
        switch (channel) {
            case "email":
                return new EmailNotification();
                break;
            case "sms":
                return new SMSNotification();
                break;
            case "push":
                return new PushNotification();
                break;
            default:
                throw new Error("not defined method");
        }
    }

    public send(message:string):void{
        this.notify.sendMessage(message);
    }



}