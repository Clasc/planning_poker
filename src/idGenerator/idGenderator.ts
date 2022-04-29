export type Guid = string;

export const makeIdGenerator = (format: string) => {
    return (): Guid => {
        return format.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16) as Guid;
        });
    }
}

export const guidGenerator = makeIdGenerator('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

