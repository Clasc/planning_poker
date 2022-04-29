
export type Choices = Map<string, number>;

export interface PlanningPoker extends Record<string, unknown> {
    addChoice(user: string, choice: number): void;
    getResult(): number;
    addUser(user: string): void;
    allUsersHaveChosen(): boolean;
    getChoices(): Choices;
};