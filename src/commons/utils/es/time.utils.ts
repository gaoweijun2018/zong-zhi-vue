import moment from 'moment';
/**
 * 处理时间
 * @param time
 * @param cFormat
 */
export const parseTime = (
    time?: object | string | number,
    cFormat?: string
): string | null => {
    if (!time || time === '--') {
        return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date: Date;
    if (typeof time === 'object') {
        date = time as Date;
    } else {
        if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
            time = parseInt(time);
        }
        if (typeof time === 'number' && time.toString().length === 10) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj: { [key: string]: number } = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        return value.toString().padStart(2, '0');
    });
    return timeStr;
};

export const transferSecondsToTime = (seconds: number) => {
    return moment('1900-01-01 00:00:00').add(seconds, 'seconds').format('HH:mm:ss');
};

export const addZero = (time: number) => {
    return time < 10 ? `0${time}` : time;
};
