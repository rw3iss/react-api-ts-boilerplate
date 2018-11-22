import RequestHelper from './RequestHelper'
const config: any = require('api/config.json');

export default class Strapi {

    public static getPageContent(pageId) {

        return new Promise((resolve, reject) => {
            let url = config.API_DOMAIN;
            url += `/${pageId}s`;
            console.log("url", url);
            RequestHelper.request(url, 'get')
            .then(d => {
                let data = JSON.parse(d);
                console.log("get page content response", pageId, data);
                let firstResult = data[0];
                return resolve(firstResult);
            }).catch(e => {
                return reject(e);
            });
        });
        
    }

}