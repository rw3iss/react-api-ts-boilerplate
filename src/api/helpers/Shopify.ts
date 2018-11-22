import RequestHelper from './RequestHelper'
const config: any = require('api/config.json');

export default class Shopify {

    public static getProductData(productId) {

        return new Promise((resolve, reject) => {
            let url = config.SHOPIFY_DOMAIN;
            url += `${productId}s`;
            console.log("url", url);

            let d = {
                productId: productId,
                name: 'Test product',
                description: 'Test product description'
            }
            return resolve(d);
            /* RequestHelper.request(url, 'get')
            .then(d => {
                let data = JSON.parse(d);
                console.log("get page content response", pageId, data);
                let firstResult = data[0];
                return resolve(firstResult);
            }).catch(e => {
                return reject(e);
            }); */
        });
        
    }

}