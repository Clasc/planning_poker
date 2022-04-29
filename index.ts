import { guidGenerator } from "./src/idGenerator/idGenderator";
import { makePlanningPoker, playGame } from "./src/planningPoker/planningPoker";
import { makeSessionStorage } from "./src/planningPoker/sessionStorage";
import { PlanningPoker } from "./src/planningPoker/types";

const sessionStorage = makeSessionStorage<PlanningPoker>(guidGenerator);
const sessionid = sessionStorage.createSession();
const game1 = makePlanningPoker(['John', 'Bob', 'Alice'])
sessionStorage.addToSession(sessionid, makePlanningPoker(['John', 'Bob', 'Alice']));
console.log({ sessionid });
game1.addChoice("John", 1);
game1.addChoice("Bob", 3);
game1.addChoice("Alice", 5);

const game2 = makePlanningPoker(['Piertro', 'Lollita', 'Hans'])
const sessionid2 = sessionStorage.createSession();
console.log({ sessionid2 });
game2.addChoice("Piertro", 20);
game2.addChoice("Lollita", 40);
game2.addChoice("Hans", 55);

playGame(game1);
playGame(game2);
