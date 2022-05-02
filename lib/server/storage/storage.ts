import { GameState } from "../../Types/GameState";

export interface IStorage<TStorage> {
    get: (id: string) => Promise<TStorage | undefined>;
    set: (id: string, val: TStorage) => Promise<void>;
    exists: (id: string) => Promise<boolean>;
}

export function makeStorage<TStorage>(): IStorage<TStorage> {
    const storage = new Map<string, TStorage>();
    const set = async (id: string, val: TStorage) => { await storage.set(id, val) };
    const get = async (id: string) => { return await storage.get(id) };
    const exists = async (id: string) => { return await storage.has(id) };
    return { get, set, exists };
}

export const storage = makeStorage<GameState>();