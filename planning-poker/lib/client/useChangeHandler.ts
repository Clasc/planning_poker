export function useChangeHandler(setter: (value: string) => void) {
    return ({ target }: React.ChangeEvent<HTMLInputElement>) => { setter(target?.value ?? "") }
}