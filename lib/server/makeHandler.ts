import { NextApiHandler, NextApiResponse } from "next";
import { IErrorResponse } from "../Types/api";
import { NotFoundError, BadRequestError } from "./services/Errors/ServerErrors";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "TRACE";

export function makeHandler<TResponse>(method: Method): (handler: NextApiHandler) => NextApiHandler<TResponse> {
    return (handler: NextApiHandler<TResponse>) => {
        return async (req, res) => {
            if (req.method !== method) {
                res.status(405).json({ error: "Method not allowed" } as any);
                return;
            }
            try {
                await handler(req, res);
                return;
            } catch (error) {
                handleError<TResponse>(error, res);
            }
            finally {
                res.end();
            }
        }
    };
}


function handleError<TResponse>(error: unknown, res: NextApiResponse<TResponse>) {
    if (error instanceof NotFoundError) {
        res.status(404).json({ error: error, message: error.message } as any);
        return;
    }

    if (error instanceof BadRequestError) {
        res.status(400).json({ error: error, message: error.message } as any);
        return;
    }

    res.status(500).json({ error: error } as any);
}

export const makePost = <TResponse extends IErrorResponse = IErrorResponse>() => makeHandler<TResponse>("POST");
export const makeGet = <TResponse extends IErrorResponse = IErrorResponse>() => makeHandler<TResponse>("GET");