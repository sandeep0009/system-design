// Observer Pattern: One-to-Many Subscription for News Updates

export interface IGlobalUser {
    name: string;
    email: string;
    isSubscribed: boolean;
}

export interface INews {
    title: string;
    description: string;
}

export const globalNews: INews[] = [];

export class User {
    private name: string;
    private email: string;
    private isSubscribed: boolean;
    private readonly news: INews[] = [];

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
        this.isSubscribed = false;
    }
    public getEmail(): string {
        return this.email;
    }

    public getName(): string {
        return this.name;
    }

    public setSubscribed(value: boolean) {
        this.isSubscribed = value;
    }

    public getSubscribed(): boolean {
        return this.isSubscribed;
    }

    public updateNews(news: INews): void {
        this.news.push(news);
        console.log(` ${this.name} received news: ${news.title} - ${news.description}`);
    }
}

export class NewsAgency {
    private subscribers: User[] = [];

    public subscribe(user: User): void {
        const exists = this.subscribers.find(u => u.getEmail() === user.getEmail());
        if (!exists) {
            this.subscribers.push(user);
            user.setSubscribed(true);
            console.log(` ${user.getName()} subscribed to NewsAgency.`);
        }
    }

    public unsubscribe(user: User): void {
        this.subscribers = this.subscribers.filter(u => u.getEmail() !== user.getEmail());
        user.setSubscribed(false);
        console.log(`${user.getName()} unsubscribed from NewsAgency.`);
    }

    public addNews(news: INews): void {
        globalNews.push(news);
        console.log(` News Published: ${news.title}`);

        for (const user of this.subscribers) {
            if (user.getSubscribed()) {
                user.updateNews(news);
            }
        }
    }
}
