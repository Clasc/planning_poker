export interface IErrorResponse { error: string };
export type IResponse<TResponse> = TResponse | IErrorResponse;

export interface IGameResponse extends IResponse<{ game: GameState, gameId: string }> { };
export interface IPlayerResponse extends IResponse<{ message: string, users: string[] }> { };