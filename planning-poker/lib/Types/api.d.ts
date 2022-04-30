export interface IErrorResponse { error?: string };
export interface IGameResponse extends IErrorResponse { game?: GameState, gameId?: string };
export interface IPlayerResponse extends IErrorResponse { message?: string, players?: string[] };
export interface IVoteResponse extends IErrorResponse { voted?: number };
export interface IRevealResponse extends IErrorResponse { revealed?: number };