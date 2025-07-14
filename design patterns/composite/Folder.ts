import type { FileSystemItem } from "./type";

export class Folder implements FileSystemItem {
    private children: FileSystemItem[] = [];

    constructor(private name: string) {}

    add(item: FileSystemItem) {
        this.children.push(item);
    }

    getName() {
        return this.name;
    }

    display(indent = '') {
        console.log(`${indent}+ Folder: ${this.getName()}`);
        this.children.forEach(child => child.display(indent + '  '));
    }
}