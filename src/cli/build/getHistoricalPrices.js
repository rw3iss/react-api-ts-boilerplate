/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/getHistoricalPrices.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ExchangeRates.js":
/*!**************************!*\
  !*** ./ExchangeRates.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar RequestHelper = __webpack_require__(/*! ./helpers/RequestHelper */ \"./helpers/RequestHelper.js\");\nvar oxr = __webpack_require__(/*! open-exchange-rates */ \"open-exchange-rates\");\nvar fx = __webpack_require__(/*! money */ \"money\");\nvar config = __webpack_require__(/*! ./config.json */ \"./config.json\");\noxr.set({ app_id: config.OpenExchangeRateAppID });\nclass ExchangeRates {\n    static oxrUrl(endpoint) {\n        let url = `https://openexchangerates.org/api/${endpoint}?app_id=${config.OpenExchangeRateAppID}`;\n        return url;\n    }\n    constructor() {\n    }\n    // gets all current rate data relative to base\n    static getAllRates() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return new Promise((resolve, reject) => {\n                oxr.latest(function () {\n                    // You can now use `oxr.rates`, `oxr.base` and `oxr.timestamp`\n                    let data = {\n                        rates: oxr.rates,\n                        base: oxr.base,\n                        timestamp: oxr.timestamp\n                    };\n                    return resolve(data);\n                });\n            });\n        });\n    }\n    // gets current rate for given pair\n    static getPair(base, other) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let data = yield this.getAllRates();\n            let pair = {};\n            pair[base] = data.rates[base];\n            pair[other] = data.rates[other];\n            return pair;\n        });\n    }\n    // returns an array of price data for the given pair between from to at the given intervals\n    static getRateRange(pair, dateFrom, dateTo, interval) {\n        return __awaiter(this, void 0, void 0, function* () {\n            console.log(\"getRateRange\", pair, dateFrom, dateTo, interval);\n        });\n    }\n    static getHistoricalRates(date) {\n        return __awaiter(this, void 0, void 0, function* () {\n            //console.log(\"getHistoricalRates\", date);\n            return new Promise(function (resolve, reject) {\n                return __awaiter(this, void 0, void 0, function* () {\n                    let url = ExchangeRates.oxrUrl(`historical/${date}.json`);\n                    let r = true; //await RequestHelper.request(url);\n                    return resolve(r);\n                });\n            });\n        });\n    }\n}\nexports.default = ExchangeRates;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FeGNoYW5nZVJhdGVzLmpzPzNjMWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7Ozs7Ozs7Ozs7QUFDYixJQUFJLGFBQWEsR0FBRyxtQkFBTyxDQUFDLDJEQUF5QixDQUFDLENBQUM7QUFDdkQsSUFBSSxHQUFHLEdBQUcsbUJBQU8sQ0FBQyxnREFBcUIsQ0FBQyxDQUFDO0FBQ3pDLElBQUksRUFBRSxHQUFHLG1CQUFPLENBQUMsb0JBQU8sQ0FBQyxDQUFDO0FBQzFCLElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsb0NBQWUsQ0FBQyxDQUFDO0FBRXRDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFFakQsTUFBcUIsYUFBYTtJQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDbEIsSUFBSSxHQUFHLEdBQUcscUNBQXFDLFFBQVEsV0FBVyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNqRyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDtJQUNBLENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsTUFBTSxDQUFPLFdBQVc7O1lBQ3BCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUM7b0JBQ1AsOERBQThEO29CQUM5RCxJQUFJLElBQUksR0FBRzt3QkFDUCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7d0JBQ2hCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTt3QkFDZCxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7cUJBQzNCLENBQUM7b0JBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFRCxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSzs7WUFDNUIsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUQsMkZBQTJGO0lBQzNGLE1BQU0sQ0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUTs7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLGtCQUFrQixDQUFDLElBQUk7O1lBQ2hDLDBDQUEwQztZQUMxQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQWUsT0FBTyxFQUFFLE1BQU07O29CQUM3QyxJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9DQUFtQztvQkFDaEQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7YUFBQSxDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUEvQ0QsZ0NBK0NDIiwiZmlsZSI6Ii4vRXhjaGFuZ2VSYXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBSZXF1ZXN0SGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXJzL1JlcXVlc3RIZWxwZXInKTtcbnZhciBveHIgPSByZXF1aXJlKCdvcGVuLWV4Y2hhbmdlLXJhdGVzJyk7XG52YXIgZnggPSByZXF1aXJlKCdtb25leScpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzb24nKTtcblxub3hyLnNldCh7IGFwcF9pZDogY29uZmlnLk9wZW5FeGNoYW5nZVJhdGVBcHBJRCB9KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGNoYW5nZVJhdGVzIHtcblxuICAgIHN0YXRpYyBveHJVcmwoZW5kcG9pbnQpIHtcbiAgICAgICAgbGV0IHVybCA9IGBodHRwczovL29wZW5leGNoYW5nZXJhdGVzLm9yZy9hcGkvJHtlbmRwb2ludH0/YXBwX2lkPSR7Y29uZmlnLk9wZW5FeGNoYW5nZVJhdGVBcHBJRH1gO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8vIGdldHMgYWxsIGN1cnJlbnQgcmF0ZSBkYXRhIHJlbGF0aXZlIHRvIGJhc2VcbiAgICBzdGF0aWMgYXN5bmMgZ2V0QWxsUmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBveHIubGF0ZXN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gbm93IHVzZSBgb3hyLnJhdGVzYCwgYG94ci5iYXNlYCBhbmQgYG94ci50aW1lc3RhbXBgXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGVzOiBveHIucmF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IG94ci5iYXNlLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG94ci50aW1lc3RhbXBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdldHMgY3VycmVudCByYXRlIGZvciBnaXZlbiBwYWlyXG4gICAgc3RhdGljIGFzeW5jIGdldFBhaXIoYmFzZSwgb3RoZXIpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmdldEFsbFJhdGVzKCk7XG4gICAgICAgIGxldCBwYWlyID0ge307XG4gICAgICAgIHBhaXJbYmFzZV0gPSBkYXRhLnJhdGVzW2Jhc2VdO1xuICAgICAgICBwYWlyW290aGVyXSA9IGRhdGEucmF0ZXNbb3RoZXJdO1xuICAgICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gICAgXG4gICAgLy8gcmV0dXJucyBhbiBhcnJheSBvZiBwcmljZSBkYXRhIGZvciB0aGUgZ2l2ZW4gcGFpciBiZXR3ZWVuIGZyb20gdG8gYXQgdGhlIGdpdmVuIGludGVydmFsc1xuICAgIHN0YXRpYyBhc3luYyBnZXRSYXRlUmFuZ2UocGFpciwgZGF0ZUZyb20sIGRhdGVUbywgaW50ZXJ2YWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRSYXRlUmFuZ2VcIiwgcGFpciwgZGF0ZUZyb20sIGRhdGVUbywgaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRIaXN0b3JpY2FsUmF0ZXMoZGF0ZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0SGlzdG9yaWNhbFJhdGVzXCIsIGRhdGUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gRXhjaGFuZ2VSYXRlcy5veHJVcmwoYGhpc3RvcmljYWwvJHtkYXRlfS5qc29uYCk7XG4gICAgICAgICAgICBsZXQgciA9IHRydWU7Ly9hd2FpdCBSZXF1ZXN0SGVscGVyLnJlcXVlc3QodXJsKTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHIpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ExchangeRates.js\n");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: database, TimeZone, OpenExchangeRateAppID, GetForexDataAccessKey, 1ForgeApiKey, AlphaVantageApiKey, IntrinioAPIKey, IntrinioExcelUsername, IntrinioExcelPassword, DataSavePath, InterestedQuotePairs, default */
/***/ (function(module) {

eval("module.exports = {\"database\":{\"host\":\"localhost\",\"user\":\"ropt\",\"pass\":\"root\",\"database\":\"forex\",\"multipleStatements\":true,\"socket\":\"/Applications/MAMP/tmp/mysql/mysql.sock\"},\"TimeZone\":\"America/New_York\",\"OpenExchangeRateAppID\":\"2c01b9a11a2a412d88b92ef8c211109e\",\"GetForexDataAccessKey\":\"wyyypqhc5qr5fts9pgtdhwiy91bk7f7f4xz8j4xxlvwbjk858mwyu2f18n7q8vw0\",\"1ForgeApiKey\":\"D21IvRsIGmDedbjZx1lK6CnT9UA1eR7m\",\"AlphaVantageApiKey\":\"92EIFWVGIF09Z1CW\",\"IntrinioAPIKey\":\"Ojc1ODMxNzU2M2JhOWNiMzJkYWRhNzBlOTI5YmExMTkx\",\"IntrinioExcelUsername\":\"9edb8b3c792dfea264c3f4a9bf88479f\",\"IntrinioExcelPassword\":\"10b95588de94d37f08e5adb61461dc88\",\"DataSavePath\":\"/Users/rw3iss/Sites/forex-bp/src/cli/price_data/\",\"InterestedQuotePairs\":[\"EURUSD\",\"GBPJPY\",\"AUDUSD\"]};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbmZpZy5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config.json\n");

/***/ }),

/***/ "./helpers/DateHelper.js":
/*!*******************************!*\
  !*** ./helpers/DateHelper.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass DateHelper {\n    static formatOxrDate(date) {\n        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();\n        if (month.length < 2)\n            month = '0' + month;\n        if (day.length < 2)\n            day = '0' + day;\n        return [year, month, day].join('-');\n    }\n}\nexports.default = DateHelper;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL0RhdGVIZWxwZXIuanM/YzNjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLFVBQVU7SUFFM0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNsQixLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMvQixHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDdEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFcEMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFSjtBQWRELDZCQWNDIiwiZmlsZSI6Ii4vaGVscGVycy9EYXRlSGVscGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUhlbHBlciB7XG5cbiAgICBzdGF0aWMgZm9ybWF0T3hyRGF0ZShkYXRlKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZSksXG4gICAgICAgICAgICBtb250aCA9ICcnICsgKGQuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgICAgICAgZGF5ID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgIHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgXG4gICAgICAgIGlmIChtb250aC5sZW5ndGggPCAyKSBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgICAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIGRheSA9ICcwJyArIGRheTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/DateHelper.js\n");

/***/ }),

/***/ "./helpers/RequestHelper.js":
/*!**********************************!*\
  !*** ./helpers/RequestHelper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst request = __webpack_require__(/*! request */ \"request\");\nclass RequestHelper {\n    static request(url, method = 'GET', data, headers) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return new Promise((resolve, reject) => {\n                try {\n                    var m = method.toLowerCase();\n                    var func = m == 'get' ? request.get :\n                        m == 'post' ? request.post :\n                            m == 'delete' ? request.delete :\n                                m == 'put' ? request.put : null;\n                    if (!func)\n                        throw new Error(\"Unsupported request method: \" + method);\n                    var options = {\n                        url: url,\n                        headers: headers\n                    };\n                    console.log(\"R:\", options.url, options.headers ? options.headers : '');\n                    func(options, (error, response, body) => {\n                        if (error)\n                            return reject(error);\n                        resolve(body);\n                    });\n                }\n                catch (e) {\n                    console.log(\"error\", e);\n                    reject(e);\n                }\n            });\n        });\n    }\n}\nmodule.exports = RequestHelper;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL1JlcXVlc3RIZWxwZXIuanM/YzcyZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sT0FBTyxHQUFHLG1CQUFPLENBQUMsd0JBQVMsQ0FBQyxDQUFDO0FBRW5DLE1BQU0sYUFBYTtJQUVmLE1BQU0sQ0FBTyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87O1lBQ25ELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ25DLElBQUk7b0JBQ0EsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUU3QixJQUFJLElBQUksR0FDSixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDNUIsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUNoQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBRXBDLElBQUksQ0FBQyxJQUFJO3dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBRTdELElBQUksT0FBTyxHQUFHO3dCQUNWLEdBQUcsRUFBRSxHQUFHO3dCQUNSLE9BQU8sRUFBRSxPQUFPO3FCQUNuQixDQUFDO29CQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRXZFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO3dCQUNwQyxJQUFJLEtBQUs7NEJBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUM7aUJBQ047Z0JBQUMsT0FBTSxDQUFDLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBRUo7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiIuL2hlbHBlcnMvUmVxdWVzdEhlbHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNsYXNzIFJlcXVlc3RIZWxwZXIge1xuXG4gICAgc3RhdGljIGFzeW5jIHJlcXVlc3QodXJsLCBtZXRob2QgPSAnR0VUJywgZGF0YSwgaGVhZGVycykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBmdW5jID0gXG4gICAgICAgICAgICAgICAgICAgIG0gPT0gJ2dldCcgPyByZXF1ZXN0LmdldCA6XG4gICAgICAgICAgICAgICAgICAgIG0gPT0gJ3Bvc3QnID8gcmVxdWVzdC5wb3N0IDpcbiAgICAgICAgICAgICAgICAgICAgbSA9PSAnZGVsZXRlJyA/IHJlcXVlc3QuZGVsZXRlIDpcbiAgICAgICAgICAgICAgICAgICAgbSA9PSAncHV0JyA/IHJlcXVlc3QucHV0IDogbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICghZnVuYylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2Q6IFwiICsgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSOlwiLCBvcHRpb25zLnVybCwgb3B0aW9ucy5oZWFkZXJzID8gb3B0aW9ucy5oZWFkZXJzIDogJycpO1xuXG4gICAgICAgICAgICAgICAgZnVuYyhvcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYm9keSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RIZWxwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/RequestHelper.js\n");

/***/ }),

/***/ "./scripts/getHistoricalPrices.ts":
/*!****************************************!*\
  !*** ./scripts/getHistoricalPrices.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// Download all price data from START_DATE to END_DATE for CURRENCY PAIR \nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst ExchangeRates_1 = __webpack_require__(/*! ../ExchangeRates */ \"./ExchangeRates.js\");\nconst DateHelper_1 = __webpack_require__(/*! ../helpers/DateHelper */ \"./helpers/DateHelper.js\");\nconst config = __webpack_require__(/*! ../config.json */ \"./config.json\");\nconst START_DATE = new Date(2018, 0, 1);\nconst END_DATE = new Date();\nfunction run() {\n    return __awaiter(this, void 0, void 0, function* () {\n        let histRates = {};\n        let promises = [];\n        for (var d = new Date(START_DATE); d <= END_DATE; d.setDate(d.getDate() + 1)) {\n            promises.push(new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {\n                try {\n                    let dateKey = DateHelper_1.default.formatOxrDate(d);\n                    let filePath = path.resolve(config.DataSavePath, `${dateKey}.json`);\n                    if (!fs.existsSync(filePath)) {\n                        let r = yield ExchangeRates_1.default.getHistoricalRates(dateKey);\n                        histRates[dateKey] = r;\n                        // write the rate to file \n                        console.log(\"Writing\", filePath);\n                        fs.writeFileSync(filePath, r); //JSON.stringify(r));\n                        return resolve(r);\n                    }\n                    else {\n                        console.log(\"File exists.\", filePath);\n                        let r = JSON.parse(fs.readFileSync(filePath, 'utf-8'));\n                        histRates[dateKey] = r;\n                        return resolve(r);\n                    }\n                }\n                catch (e) {\n                    return reject(e);\n                }\n            })));\n        }\n        yield Promise.all(promises);\n        //console.log(histRates);\n        console.log(`Done. All day rates from ${DateHelper_1.default.formatOxrDate(START_DATE)} to ${DateHelper_1.default.formatOxrDate(END_DATE)} saved.`);\n    });\n}\nrun();\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2dldEhpc3RvcmljYWxQcmljZXMudHM/Mjg5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUVBQXlFO0FBQ3pFLCtDQUF5QjtBQUN6QixxREFBNkI7QUFDN0IsMEZBQTZDO0FBQzdDLGlHQUErQztBQUMvQyxNQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLHFDQUFnQixDQUFDLENBQUM7QUFFekMsTUFBTSxVQUFVLEdBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxNQUFNLFFBQVEsR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO0FBRWpDLFNBQWUsR0FBRzs7UUFDaEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksUUFBUSxHQUF3QixFQUFFLENBQUM7UUFFdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzVFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFnQixFQUFFO2dCQUNoRSxJQUFJO29CQUNGLElBQUksT0FBTyxHQUFHLG9CQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxPQUFPLE9BQU8sQ0FBQyxDQUFDO29CQUVwRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDNUIsSUFBSSxDQUFDLEdBQUcsTUFBTSx1QkFBYSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN4RCxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QiwwQkFBMEI7d0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQzt3QkFDaEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7d0JBQ3BELE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNuQjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbkI7aUJBQ0Y7Z0JBQUMsT0FBTSxDQUFDLEVBQUU7b0JBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO1lBQ0gsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNMO1FBRUQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLHlCQUF5QjtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixvQkFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxvQkFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEksQ0FBQztDQUFBO0FBRUQsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoiLi9zY3JpcHRzL2dldEhpc3RvcmljYWxQcmljZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEb3dubG9hZCBhbGwgcHJpY2UgZGF0YSBmcm9tIFNUQVJUX0RBVEUgdG8gRU5EX0RBVEUgZm9yIENVUlJFTkNZIFBBSVIgXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEV4Y2hhbmdlUmF0ZXMgZnJvbSAnLi4vRXhjaGFuZ2VSYXRlcyc7XG5pbXBvcnQgRGF0ZUhlbHBlciBmcm9tICcuLi9oZWxwZXJzL0RhdGVIZWxwZXInO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnLmpzb24nKTtcblxuY29uc3QgU1RBUlRfREFURSAgICA9IG5ldyBEYXRlKDIwMTgsMCwxKTtcbmNvbnN0IEVORF9EQVRFICAgICAgPSBuZXcgRGF0ZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBydW4oKSB7XG4gIGxldCBoaXN0UmF0ZXMgPSB7fTtcbiAgbGV0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPGFueT4+ID0gW107XG5cbiAgZm9yICh2YXIgZCA9IG5ldyBEYXRlKFNUQVJUX0RBVEUpOyBkIDw9IEVORF9EQVRFOyBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAxKSkge1xuICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZGF0ZUtleSA9IERhdGVIZWxwZXIuZm9ybWF0T3hyRGF0ZShkKTtcbiAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKGNvbmZpZy5EYXRhU2F2ZVBhdGgsIGAke2RhdGVLZXl9Lmpzb25gKTtcblxuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgbGV0IHIgPSBhd2FpdCBFeGNoYW5nZVJhdGVzLmdldEhpc3RvcmljYWxSYXRlcyhkYXRlS2V5KTtcbiAgICAgICAgICBoaXN0UmF0ZXNbZGF0ZUtleV0gPSByO1xuICAgICAgICAgIC8vIHdyaXRlIHRoZSByYXRlIHRvIGZpbGUgXG4gICAgICAgICAgY29uc29sZS5sb2coXCJXcml0aW5nXCIsIGZpbGVQYXRoKVxuICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIHIpOyAvL0pTT04uc3RyaW5naWZ5KHIpKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZXhpc3RzLlwiLCBmaWxlUGF0aCk7XG4gICAgICAgICAgbGV0IHIgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0Zi04JykpO1xuICAgICAgICAgIGhpc3RSYXRlc1tkYXRlS2V5XSA9IHI7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUocik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgLy9jb25zb2xlLmxvZyhoaXN0UmF0ZXMpO1xuICBjb25zb2xlLmxvZyhgRG9uZS4gQWxsIGRheSByYXRlcyBmcm9tICR7RGF0ZUhlbHBlci5mb3JtYXRPeHJEYXRlKFNUQVJUX0RBVEUpfSB0byAke0RhdGVIZWxwZXIuZm9ybWF0T3hyRGF0ZShFTkRfREFURSl9IHNhdmVkLmApO1xufVxuXG5ydW4oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/getHistoricalPrices.ts\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "money":
/*!************************!*\
  !*** external "money" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"money\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25leVwiPzE2MjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25leVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///money\n");

/***/ }),

/***/ "open-exchange-rates":
/*!**************************************!*\
  !*** external "open-exchange-rates" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"open-exchange-rates\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvcGVuLWV4Y2hhbmdlLXJhdGVzXCI/ZDgzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJvcGVuLWV4Y2hhbmdlLXJhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3Blbi1leGNoYW5nZS1yYXRlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///open-exchange-rates\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1ZXN0XCI/MGZiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVxdWVzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///request\n");

/***/ })

/******/ });