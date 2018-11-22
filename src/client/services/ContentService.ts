const config: any = require('client/config.json');

/*
 Communicates with our backend for CMS content. 
*/

export default class ContentService {

    public static getPageContent(pageName, params?: {}) {
        return new Promise(async (resolve, reject) => {
            try {
                let r = await fetch(`${process.env.API_DOMAIN}/api/page/${pageName}`) as any;
                let d = await r.json();
                return resolve(d.data);
            } catch(e) {
                return reject(e);
            }
        })
    }

    public static getProductData(productId) {
        return new Promise(async (resolve, reject) => {
            try {
                let r = await fetch(`${process.env.API_DOMAIN}/api/product/${productId}`) as any;
                let d = await r.json();
                return resolve(d.data);
            } catch(e) {
                return reject(e);
            }
        })
    }

}
