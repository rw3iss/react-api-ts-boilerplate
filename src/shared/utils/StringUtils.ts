export default class StringUtils {
    
    static capitalizeString(str: string, allWords: boolean = false) {
            let words = str.split(' ');
            let wordsUpper: any = [];
            words.forEach((w: string, i: number) => {
                if (i > 0 && !allWords) {
                    wordsUpper.push(w);
                } else {
                    wordsUpper.push(w.charAt(0).toUpperCase() + w.slice(1));
                }
            })
            return wordsUpper.join(' ');
        }
    
        static isValidEmail(email: string) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        
        static errorToString(e: any, debug: boolean): string {
            if (debug) {
                console.log("errorToString", typeof e);
                if (e === undefined) { return 'undefined'; }
                if (e === null) { return 'null'; }
                if (e.message && /^\s*$/.test(e.message)) { return `empty ${e.stack||''}`; }
                if (e.message) { return `${e.message} ${e.stack||''}`; }
                if (e.error) { return `${e.error} ${e.stack||''}`; }
    
                if (typeof e == 'string')
                    return e;
                
                if (Array.isArray(e)) {
                    return e.join(' ');
                }
                
                if (typeof e == 'object') 
                    return JSON.stringify(e);
    
                return e.length ? e.toString() : '';
            }
            return (e && e.message) || '';
        }

        static queryStringFromOptions(opts) {
            let q = Object.keys(opts).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(opts[k])
            }).join('&')
            return q;
        }

        static createTextSummary(text: string, maxLength: number | undefined) {
            let summary = text || "";
            if (maxLength && summary.length > maxLength) {
                summary = text.substr(0,maxLength) + '...';
            }
            return summary;
        }

    }