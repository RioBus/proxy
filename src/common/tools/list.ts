class List<T> {
    
    private items: Array<T>;

    public constructor() {
        this.items = [];
    }

    public size(): number {
        return this.items.length;
    }

    public add(value: T): void {
        this.items.push(value);
    }

    public get(index: number): T {
        return this.items[index];
    }
    
    public getIterable(): Array<T>{
        return this.items;
    }
}
export = List;