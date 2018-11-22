import * as request from 'request';

export default class RequestHelper {

    static request(url, method = 'GET', data = {}): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                var m = method.toLowerCase();
                
                var func = 
                    m == 'get' ? request.get :
                    m == 'post' ? request.post :
                    m == 'delete' ? request.delete :
                    m == 'put' ? request.put : null;

                if (!func)
                    throw new Error("Unsupported request method: " + method);
        
                func(url, data, (error, response, body) => {
                    //console.log("Request response", error, body);
                    if (error) return reject(error);

                    resolve(body);
                });
            } catch(e) {
                console.log("error", e);
                reject(e);
            }
        });
    }
    
}