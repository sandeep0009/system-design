// Builder pattern is a creational design pattern that separates the construction of a complex object from its representation


interface IUserProfile {
    setName(name: string): IUserProfile;
    setEmail(email: string): IUserProfile;
    setAge(age: number): IUserProfile;
    setPhone(phone: number): IUserProfile;
    setSocialLinks(links: string[]): IUserProfile;
    build(): UserProfile;

}


export class UserProfileBuilder implements IUserProfile {
    _name?: string;
    _email?: string;
    _age?: number;
    _phone?: number;
    _socialLinks?: string[];
    public setName(name: string): this {
        this._name = name;
        return this;
    }
    public setEmail(email: string): this {
        this._email = email;
        return this;

    }
    public setAge(age: number): this {
        this._age = age;
        return this;
    }

    public setPhone(phone: number): this {
        this._phone = phone;
        return this;
    }

    public setSocialLinks(links: string[]): this {
        this._socialLinks = links;
        return this;
    }

    public build(): UserProfile {
        return new UserProfile(this);
    }
}

export class UserProfile {
    public readonly name?: string;
    public readonly email?: string;
    public readonly age?: number;
    public readonly phone?: number;
    public readonly socialLinks?: string[];
    public constructor(builder: UserProfileBuilder) {
        this.name = builder["_name"];
        this.email = builder["_email"];
        this.age = builder["_age"];
        this.phone = builder["_phone"];
        this.socialLinks = builder["_socialLinks"];
    }
    public static builder(): UserProfileBuilder {
        return new UserProfileBuilder();
    }
}