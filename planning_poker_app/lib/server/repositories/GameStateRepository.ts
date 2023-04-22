import { GameState } from "../../Types/GameState";
import { storage } from "../storage/storage";
import { IRepository } from "./IRepository";

export interface IGameStateRepository extends IRepository<GameState> {
    getVotes: (id: string) => Promise<(string | number)[]>
};

export function makeGameStateRepository(): IGameStateRepository {
    const set = storage.set;
    const get = async (id: string) => { return await storage.get(id) };
    const exists = storage.exists;

    const getVotes = async (id: string) => {
        const game = await get(id);
        return !game ? [] : Object.values(game.votes);
    }

    return { set, get, exists, getVotes };
}
