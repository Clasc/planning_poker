import { Guid, guidGenerator } from "../idGenerator/idGenderator";
import { makeSessionStorage } from "./sessionStorage";
import { Choices, PlanningPoker } from "./types";


export function makePlanningPoker(users: string[]): PlanningPoker {
    const choices: Choices = new Map();

    const addChoice = (user: string, choice: number) => choices.set(user, choice);
    const addUser = (user: string) => users.push(user);

    const getResult = () => {
        let sum = 0;
        choices.forEach(choice => { sum += choice });
        return sum / choices.size;
    }

    const allUsersHaveChosen = () => users.length === choices.size;
    const getChoices = () => choices;
    return { addChoice, getResult, addUser, allUsersHaveChosen, getChoices };
}


export const playGame = (game: PlanningPoker) => {
    console.log({ game: game.getChoices() });
    console.log(game.allUsersHaveChosen() ? { result: game.getResult() } : "Not all users have chosen yet");
}
