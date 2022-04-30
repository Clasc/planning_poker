import { NextApiHandler } from "next";
import { IErrorResponse } from "../Types/api";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "TRACE";

export function makeHandler<TResponse extends IErrorResponse = IErrorResponse>(method: Method, handler: NextApiHandler<TResponse>): NextApiHandler<TResponse> {
    return (req, res) => {
        if (req.method !== method) {
            res.status(405).json({ error: "Method not allowed" } as any);
            return;
        }
        handler(req, res);
    }
}