export interface IErrorResponse { error?: string };
export interface IGameResponse extends IErrorResponse { game?: GameState, gameId?: string };
export interface IPlayerResponse extends IErrorResponse { message?: string, users?: string[] };