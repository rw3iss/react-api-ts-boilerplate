//import * as stringify from 'json-stringify-safe';

export default class ApiResponse {
    public request: Express.Request;
    public response: Express.Response;
    public status: string = ''; // string code, ie 'error', 'success', 'unauthenticated'
    public code: string = ''; // some numeric code, can probably get ride of startus and just use code
    public message: string = ''; // Longer message
    public details: any = {}; // any other details
    public sentResponse: any = {}; // actual response that was already sent (in case we want to see it after)

    constructor(req: Express.Request, res: Express.Response) {
        this.request = req;
        this.response = res;
    }

    // Will send data as json
    send(data: any) {
        (this.response as any).send(typeof data == 'object' ? JSON.stringify(data) : data);
    }

    success(data = {}) {
        const r = {
            success: true,
            code: 200,
            data: data
        };

        this.sentResponse = r;

        (this.response as any).status(200);
        (this.response as any).send(this._prepareResponse(r));
    }

    error(message: string, dataOrException: any = undefined, code: number = 400) {
        const r: any = {};
        r.success = false;
        r.responseMessage = message;  // Main, brief message
        r.errorMessage = "";

        if (dataOrException) {
            if (typeof dataOrException == 'string') {
                r.errorMessage = dataOrException;
            } else if (dataOrException.result) {
                r.errorMessage = dataOrException.result;
            } else if (dataOrException.message) {
                r.errorMessage = dataOrException.message;
            } else if (dataOrException.responseErrors) {
                r.errorMessage += " - " + dataOrException.responseErrors.join('. ');
            }
        } else {
            r.errorMessage = message;
        }
        
        (this.response as any).status(code);
        (this.response as any).send(JSON.stringify(r));
    }

    private _prepareResponse(data) {
        let r = '';
        if (typeof data == 'object')
            r = JSON.stringify(data);
        else
            r = data.toString();
        return r;
    }
}