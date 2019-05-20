const request = require('request');

class RequestHelper {

    static async request(url, method = 'GET', data, headers) {
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
                
                var options = {
                    url: url,
                    headers: headers
                };

                console.log("R:", options.url, options.headers ? options.headers : '');

                func(options, (error, response, body) => {
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

module.exports = RequestHelper;