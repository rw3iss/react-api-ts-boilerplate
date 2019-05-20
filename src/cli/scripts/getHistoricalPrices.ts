// Download all price data from START_DATE to END_DATE for CURRENCY PAIR 
import * as fs from 'fs';
import * as path from 'path';
import ExchangeRates from '../ExchangeRates';
import DateHelper from '../helpers/DateHelper';
const config = require('../config.json');

const START_DATE    = new Date(2018,0,1);
const END_DATE      = new Date();

async function run() {
  let histRates = {};
  let promises: Array<Promise<any>> = [];

  for (var d = new Date(START_DATE); d <= END_DATE; d.setDate(d.getDate() + 1)) {
    promises.push(new Promise(async (resolve, reject): Promise<any> => {
      try {
        let dateKey = DateHelper.formatOxrDate(d);
        let filePath = path.resolve(config.DataSavePath, `${dateKey}.json`);

        if (!fs.existsSync(filePath)) {
          let r = await ExchangeRates.getHistoricalRates(dateKey);
          histRates[dateKey] = r;
          // write the rate to file 
          console.log("Writing", filePath)
          fs.writeFileSync(filePath, r); //JSON.stringify(r));
          return resolve(r);
        } else {
          console.log("File exists.", filePath);
          let r = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          histRates[dateKey] = r;
          return resolve(r);
        }
      } catch(e) {
        return reject(e);
      }
    }));
  }

  await Promise.all(promises);
  //console.log(histRates);
  console.log(`Done. All day rates from ${DateHelper.formatOxrDate(START_DATE)} to ${DateHelper.formatOxrDate(END_DATE)} saved.`);
}

run();