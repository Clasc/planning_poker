import { Guid } from "../idGenerator/idGenderator";

export function makeSessionStorage<TStorage extends Record<string, unknown>>(idGenerator: () => Guid) {
    const sessions = new Map<string, TStorage>();

    const addToSession = (sessionId: string, storage: TStorage) => {
        sessions.set(sessionId, storage);
    }

    const createSession = () => {
        const id = idGenerator();
        sessions.set(id, {} as TStorage); return id;
    }

    const getSession = (sessionId: string) => sessions.get(sessionId);

    return { addToSession, getSession, createSession };
}