import { NextFunction, Request, Response } from "express";

export const middlewareError = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {};
