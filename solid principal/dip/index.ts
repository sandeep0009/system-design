// Dependency Inversion Principle:
// High-level modules should not depend on low-level modules.
// Both should depend on abstractions.

export interface INotifier {
  send(message: string): void;
}


export class NotificationSender {
  private notifier: INotifier;

  constructor(notifier: INotifier) {
    this.notifier = notifier;
  }

  public sendNotification(message: string): void {
    this.notifier.send(message);
  }
}


export class EmailNotifier implements INotifier {
  send(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}

export class SMSNotifier implements INotifier {
  send(message: string): void {
    console.log(`SMS sent: ${message}`);
  }
}

export class PushNotifier implements INotifier {
  send(message: string): void {
    console.log(`Push Notification sent: ${message}`);
  }
}