import { NextApiHandler } from "next";
import { IErrorResponse } from "../Types/api";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "TRACE";

export function makeHandler<TResponse>(method: Method): (handler: NextApiHandler) => NextApiHandler<TResponse> {
    return (handler: NextApiHandler<TResponse>) => {
        return (req, res) => {
            if (req.method !== method) {
                res.status(405).json({ error: "Method not allowed" } as any);
                return;
            }
            handler(req, res);
        }
    };
}

export const makePost = <TResponse extends IErrorResponse = IErrorResponse>() => makeHandler<TResponse>("POST");
export const makeGet = <TResponse extends IErrorResponse = IErrorResponse>() => makeHandler<TResponse>("GET");
