import * as moment from 'moment';

const validationTypes: { [index: number]: string } = {
    0: 'invalid-year',
    1: 'invalid-month',
    2: 'invalid-day',
    3: 'invalid-hour',
    4: 'invalid-minute',
    5: 'invalid-second',
    6: 'invalid-millisecond'
};

export default class DateUtil {

    public static validate(date: any): true | string {
        const m = moment(date);
        if (m.isValid()) {
            return true;
        } else {
            return validationTypes[m.invalidAt()];
        }
    }

    public static dateToIsoString(date: Date|string): string | null {
        return moment(date).toISOString();
    }

    public static mysqlDate(date?: Date): string {
        let d = date || new Date();
        return d.toISOString().slice(0, 19).replace('T', ' ');
    }

}
