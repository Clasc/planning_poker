export const api = {
    async post<TResponse>(endpoint: string, data: unknown): Promise<TResponse | null> {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return res.ok ? res.json() : null;
    },

    async get<TResponse>() {

    },
};