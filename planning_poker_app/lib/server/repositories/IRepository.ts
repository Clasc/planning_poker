export interface IRepository<T> {
    set(id: string, val: T): Promise<void>;
    get(id: string): Promise<T | undefined>;
    exists(id: string): Promise<boolean>;
}
