// Designed to run as a cron job at some specified interval, and download the price data during that time,
// Storing it to the database, acting as saved time-series data for the given InterestedQuotePairs.

import * as moment from 'moment-timezone';
import ForgeClient from 'forex-quotes';
import { DbHelper } from '../helpers/DbHelper';
const config = require('../config.json');

let client = new ForgeClient(config["1ForgeApiKey"]);

client.getQuotes(config.InterestedQuotePairs).then(response => {
    response.forEach(d => {
        let dTime = moment.unix(d.timestamp).tz('America/New_York').format('YYYY-MM-DD HH:mm');
        console.log("D", d, d.timestamp, dTime);

        // save quotes to database
        saveQuote(d);
    })
});

async function saveQuote(data) {
    // save to mysql db
    await DbHelper.insert('pair_series_quotes', data);
}

// see if a record exists for the given pair near time +/- margin
async function findQuoteNearTime(pair, time, margin = '3 mins') {
    let sql = `select * from quote_pair_series where pair='${pair} and time BETWEEN'
        `;
    let r = await DbHelper.queryOne(sql);
}

/* 
Data looks like:
{ symbol: 'EURUSD',
  bid: 1.12584,
  ask: 1.12585,
  price: 1.12584,
  timestamp: 1552374720 }
*/