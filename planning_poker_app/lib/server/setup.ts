import { makeGameStateRepository } from "./repositories/GameStateRepository";
import { makeGameService } from "./services/GameService";

export const gameStateRepo = makeGameStateRepository();
export const gameService = makeGameService(gameStateRepo);