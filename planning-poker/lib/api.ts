
const makeFetch = (method: string) => {
    return (endpoint: string, body?: unknown) => {
        return fetch(endpoint, {
            method: method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}

export const api = {
    async post<TResponse>(endpoint: string, data: unknown): Promise<TResponse | null> {
        const res = await makeFetch("POST")(endpoint, data);
        return res.ok ? res.json() : null;
    },

    async get<TResponse>(endpoint: string) {
        const res = await makeFetch("GET")(endpoint);
        return res.ok ? res.json() : null;
    },
};