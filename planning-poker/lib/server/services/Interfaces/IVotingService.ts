export interface IVotingService {
    submitVote(gameId: string, player: string, vote: number): Promise<number | string>;
}