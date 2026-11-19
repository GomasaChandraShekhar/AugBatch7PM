
export interface Employee {
    name: string,
    id: number,
    address: string,

    display(): void;

    help(): void;

    hello(): string;
}

