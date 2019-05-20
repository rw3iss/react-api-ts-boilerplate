import * as mysql from 'mysql';
import DateUtil from 'shared/utils/DateUtil';
const config = require('../config.json');

export class DbHelper {
    private static _pool: any;
    //private _conn: any;

    static initialize() {
        var self = this;

        let dbConfig = config['database'];

        // Todo: move this to config
        DbHelper._pool = mysql.createPool({
            connectionLimit : 100,
            host            : dbConfig.host,
            user            : dbConfig.user,
            password        : dbConfig.password,
            database        : dbConfig.database,
            socketPath      : dbConfig.socket
        });

        //this._conn = mysql.createConnection(CONN_STRING + '?multipleStatements=true');
        // mysqlUtilities.upgrade(this._conn);
        // mysqlUtilities.introspection(this._conn); // necessary?

        return this;
    }

    static escapeString(input?: string): string {
        return input ? mysql.escape(input) : '\'\'';
    }

    public static async queryOne<T>(sql: string, data?: {[index: string]: any}): Promise<T | null> {
        return new Promise<T | null>(async (resolve, reject) => {
            try {
                await DbHelper._pool.getConnection((err: any, connection: any) => {
                    if (err) {
                        console.log(">> Db.getConnection() ERROR -> ", err, "SQL:", sql);
                        return reject({
                            error: err,
                            query: sql,
                            data: data
                        }); 
                    }

                    connection.query(sql, data, (err: any, qr: Array<{}>) => {
                        connection.release();
                        if (err) {
                            console.log(">> Db.query() ERROR -> ", err, "SQL:", sql);
                            return reject({
                                error: err,
                                query: sql,
                                data: data
                            });
                        } else {
                            let result: any = null;
                            //console.log("QR", qr, typeof qr, typeof qr.length, qr.length, result);
                            // This is done because if the query returns a single object, it will be an object,
                            // but if it returns no objects, then it will be an array with 0 objects. Yeah.
                            if (typeof qr.length != 'undefined') {
                                result = qr.length ? qr[0] : null;
                            } else {
                                if (qr != null)
                                    result = qr;
                            }
        
                            return resolve(result as T);
                        }
                    });
                });
            }
            catch (err) {
                //console.log("EXCEPTION", err);
                return reject(err);
            }
            /* finally {
                console.log("Finally...");
                reject('final');
            } */
        });
        
    } 

    public static async query<T>(sql: string, data?: any): Promise<T> {
        const self = this;

        return new Promise<T>((resolve, reject) => {
            DbHelper._pool.getConnection((err: any, connection: any) => {
                if (err) {
                    console.log(">> Db.getConnection() ERROR -> ", err, "SQL:", sql);
                    return reject({
                        error: err,
                        query: sql,
                        data: data
                    });
                }

                connection.query(sql, data, (err: any, qr: T) => {
                    connection.release();
                    if (err) {
                        console.log(">> Db.query() ERROR -> ", err, "SQL:", sql);
                        reject({
                            error: err,
                            query: sql,
                            data: data
                        });
                    } else {
                        resolve(<T>qr);
                    }
                });
            });
        });
    }

    // Note: we're passing data as 'any' type to be able to use an implicit index on it, otherwise using 'T' type will
    // require index "synchronization" on all passed object types, or otherwise need to disable 'noImplicityAny' compiler flag.
    //public async upsert<T>(table: string, data: {[index: string]: any}, indexName: string = 'id'): Promise<T> {
    public static async upsert<T>(table: string, data: any, indexName: string = 'id'): Promise<T> {
        let upsertResult: any = null;

        if (typeof data != 'object')
            throw new Error("Upsert data must be an object.");
        
        return new Promise<T>(async (resolve, reject) => {
            // If no index, assume insert
            if (typeof data[indexName] == 'undefined') {
                upsertResult = await DbHelper.insert(table, data, indexName);
            } else {
                // Look for existing record by indexName:
                let sql = `SELECT * FROM ${table} WHERE ${indexName}='${mysql.escape(data[indexName])}'`;
                let existingResult = await DbHelper.queryOne<T | 'not-found'>(sql);

                // If none is found, assume insert, otherwise update:
                if (existingResult == 'not-found') {
                    upsertResult = await DbHelper.insert<T>(table, data, indexName);
                } else {
                    upsertResult = await DbHelper.update<T>(table, data, indexName);
                }
            }
            
            return resolve(upsertResult as T);
        });
    } 

    public static async insert<T>(table: string, data: any, indexName: string = 'id'): Promise<T> {
        return new Promise<T>(async (resolve, reject) => {
            let cols = DbHelper._generateTableCols(data, indexName);
            let colVals = DbHelper._generateTableVals(data, indexName);
            let sql = `INSERT INTO ${table} (${cols}) VALUES (${colVals})`;
            let result = await DbHelper.queryOne(sql);
            // TODO: do better id assignment?
            // Grabs new id / insertId
            if (result && typeof data.id == 'undefined') {
                (result as any).id = data.id = (result as any).insertId;
            }
            //console.log("INSERTED", data as T);
            return resolve(data as T);
        });
    }

    public static async update<T>(table: string, data: any, indexName: string = 'id'): Promise<T> {
        return new Promise<T>(async (resolve, reject) => {
            let updateVals = DbHelper._generateTableUpdateVals(data, indexName);
            let indexValue = typeof data[indexName] == 'string' ? mysql.escape(data[indexName]) : data[indexName];
            let sql = `UPDATE ${table} SET ${updateVals} WHERE ${indexName}=${indexValue}`;
            let result = await DbHelper.queryOne(sql);
            // TODO: check assignment?
            //console.log("UPDATED", data as T);
            return resolve(data as T);
        });
    }

    public static async deleteById<T>(table: string, id: any): Promise<T> {
        return new Promise<T>(async (resolve, reject) => {
            let sql = `DELETE FROM ${table} WHERE id=${id}`;
            let result: any = await DbHelper.queryOne(sql);
            return resolve(result);
        });
    }
    
    // DEPRECATED (old)
/*     public static async queryOld(sql: string, data?: any): Promise<Array<{}>> {
        const self = this;
        return new Promise<Array<{}>>((resolve, reject) => {
            DbHelper._pool.getConnection(async (err: any, connection: any) => {
                if (err) {
                    console.log(">> Db.getConnection() ERROR -> ", err, "Sql: ", sql);
                    return reject({
                        error: err,
                        sql: sql,
                        data: data
                    });
                }

                connection.query(sql, data, (err: any, qr: Array<{}>) => {
                    connection.release();
                    if (err) {
                        console.log(">> Db.query() ERROR -> ", err);
                        reject({
                            error: err,
                            query: sql,
                            data: data
                        });
                    } else {
                        resolve(qr);
                    }
                });
            });
        });
    }
 */

    // Will generate a 'col1, col2, ...' etc string, ignoring the given indexName, if any.
    private static _generateTableCols(data: any, indexName: string | null = null, updateIndex: boolean = false) {
        const cols: any = [];
        for (const prop in data) {
            if (data.hasOwnProperty(prop)) {
                if ((prop == indexName && !updateIndex) || data[prop] == undefined)
                    continue;

                cols.push(prop);
            }
        }
        return cols.join(',');
    }

    // Will generate a 'val1, val2, ...' etc string, ignoring the given indexName, if any
    private static _generateTableVals(data: any, indexName: string | null = null, updateIndex: boolean = false) {
        let colVals = '';
        let delim = '';
        for (const prop in data) {
            if (data.hasOwnProperty(prop)) {
                //console.log("Column value in data", prop, data[prop]);
                if ((prop == indexName && !updateIndex) || data[prop] == undefined)
                    continue;

                const propVal = 
                    (typeof data[prop] == 'string' ? this.escapeString(data[prop]) : 
                    (data[prop] instanceof Date ? this.escapeString(DateUtil.mysqlDate(data[prop])) :
                        data[prop]));

                colVals += delim + propVal;
                delim = ', ';
            }
        }
        return colVals;
    }

    // Will generate a 'col1=val1, col2=val2, ...' etc string, ignoring the given indexName, if any
    private static _generateTableUpdateVals(data: any, indexName: string | null = null, updateIndex: boolean = false) {
        let updateVals = '';
        let delim = '';
        for (const prop in data) {
            if (data.hasOwnProperty(prop)) {
                //console.log("Column value in data", prop, data[prop]);
                if ((prop == indexName && !updateIndex) || data[prop] == undefined)
                    continue;
                const propVal = (typeof data[prop] == 'string' ? this.escapeString(data[prop]) : 
                    (data[prop] instanceof Date ? this.escapeString(DateUtil.mysqlDate(data[prop])) :
                    data[prop]));

                updateVals += delim + `${prop}=${propVal}`;
                delim = ', ';
            }
        }
        return updateVals;
    }

}

DbHelper.initialize();