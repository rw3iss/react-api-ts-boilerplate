'use strict';
var RequestHelper = require('./helpers/RequestHelper');
var oxr = require('open-exchange-rates');
var fx = require('money');
var config = require('./config.json');

oxr.set({ app_id: config.OpenExchangeRateAppID })

export default class ExchangeRates {

    static oxrUrl(endpoint) {
        let url = `https://openexchangerates.org/api/${endpoint}?app_id=${config.OpenExchangeRateAppID}`;
        return url;
    }

    constructor() {
    }

    // gets all current rate data relative to base
    static async getAllRates() {
        return new Promise((resolve, reject) => {
            oxr.latest(function() {
                // You can now use `oxr.rates`, `oxr.base` and `oxr.timestamp`
                let data = {
                    rates: oxr.rates,
                    base: oxr.base,
                    timestamp: oxr.timestamp
                };
                return resolve(data);
            });
        });
    }

    // gets current rate for given pair
    static async getPair(base, other) {
        let data = await this.getAllRates();
        let pair = {};
        pair[base] = data.rates[base];
        pair[other] = data.rates[other];
        return pair;
    }
    
    // returns an array of price data for the given pair between from to at the given intervals
    static async getRateRange(pair, dateFrom, dateTo, interval) {
        console.log("getRateRange", pair, dateFrom, dateTo, interval);
    }

    static async getHistoricalRates(date) {
        //console.log("getHistoricalRates", date);
        return new Promise(async function(resolve, reject) {
            let url = ExchangeRates.oxrUrl(`historical/${date}.json`);
            let r = true;//await RequestHelper.request(url);
            return resolve(r);
        })
    }
}
