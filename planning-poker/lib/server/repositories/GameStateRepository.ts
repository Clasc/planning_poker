import { GameState } from "../../Types/GameState"
import { Session } from "../GameState/GameState"
import { IRepository } from "./IRepository";

export type IGameStateRepository = IRepository<GameState>;
export function makeGameStateRepository(): IRepository<GameState> {
    const set = async (id: string, val: GameState) => {
        Session.set(id, val);
    }

    const get = async (id: string) => {
        return Session.get(id);
    };

    const exists = async (id: string) => {
        return Session.has(id);
    };
    return { set, get, exists };
}