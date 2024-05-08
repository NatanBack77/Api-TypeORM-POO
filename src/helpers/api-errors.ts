export class ApiError extends Error {
	public readonly statusCode: number;
	constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode= statusCode
    }
}

export class AlreadExists extends ApiError{
    constructor(message:string){
        super(message,409)
    }
}

export class NotExists extends ApiError {
    constructor(message:string){
        super(message, 400)
    }
}