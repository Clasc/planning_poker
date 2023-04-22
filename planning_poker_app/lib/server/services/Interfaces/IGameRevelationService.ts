export interface IGameRevelationService {
    revealGame(gameId: string): Promise<number>;
}