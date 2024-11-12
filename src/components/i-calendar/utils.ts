import dayjs from "dayjs";
/**
 * Get an array of week days based on the current locale.
 * 
 * @format {string} [format] - The format supported by the dayjs instance.
 * @param {string} [locale='en'] - The locale used to format the week names.
 * @returns {string[]} An array of week day names
 */
export const getWeekNames = (format = 'ddd', locale: string = 'en',): string[] => {
    dayjs.locale(locale);
    const weekdayNames: string[] = [];
    for (let i = 0; i < 7; i++) {
        weekdayNames.push(dayjs().day(i).format(format));
    }
    return weekdayNames;
}

/**
 * Get an array of days in the given month and year.
 * 
 * @param {number} month - The month (0-indexed).
 * @param {number} year - The year.
 * @return {Array of days in the given month and year }
 */
export const getDaysArrayInMonth = (month: number, year: number, locale: string = 'en'): (number | null)[] => {
    dayjs.locale(locale);
    const firstDayOfMonthDate = dayjs().startOf('month').set('year', year).set('month', month);
    const firstDayOfMonthIndex = firstDayOfMonthDate.day();
    const daysInMonth = firstDayOfMonthDate.daysInMonth();
    const emptyDays = Array(firstDayOfMonthIndex).fill(null);
    const dayArray = Array.from({ length: daysInMonth }, (_, index) => (
        index + 1
    ))
    return [...emptyDays, ...dayArray];
}
/**
 * returns the text in form Month YYYY format
 * 
 * @param {number} month - the month (0 indexed)
 * @param {number} year - the year 
 * @param {string} locale - the locale
 * @returns {string} formatted string representation of the month and year
 */

export const getMonthNavigationHeader = (month: number, year: number, locale: string = 'en'): string => {
    dayjs.locale(locale);
    return dayjs().month(month).year(year).format('MMMM YYYY');
}

/**
 * check if the date is today
 * 
 * @param {number} date - date to check
 * @param {number} month - the month (0 indexed)
 * @param {number} year - the year 
 * @returns boolean} - true if the date is today, false otherwise
 */
export const isToday = (date: number, month: number, year: number): boolean => {
    return (dayjs().get('date') === date) &&
        (dayjs().get('month') === month) &&
        (dayjs().get('year') === year);
}

/**
 * returns the formatted date as a string in the format YYYY-MM-DD
 * @param {number} date - the date
 * @param {number} month - the month (1 indexed)
 * @param {number} year - the year
 */
export const getFormattedDate = (date: number, month: number, year: number): string => {
    return dayjs(`${year}-${month}-${date}`).format('YYYY-MM-DD');
}

/**
 *  returns true if the date is in the format YYYY-MM-DD format
 * @param {string} date - the date string in format YYYY-MM-DD
 * @returns {boolean} - true if the date is in the format YYYY-MM-DD, false otherwise
 */
export const isValidDateFormat = (date: string): boolean => {
    if (!date) return false;
    try {
        if (!dayjs(date, 'YYYY-MM-DD', true).isValid()) {
            throw new Error('Invalid date format, expected date format YYYY-MM-DD');
        }
    }
    catch (error) {
        console.error('Date format validation failed, Please use date format YYYY-MM-DD');
        return false;
    }
    return true;
}

/**
 * checks if the given date is the same as the provided day, month and year
 * @param {string} date - the date string in format YYYY-MM-DD
 * @param {number} day - the day
 * @param {number} month - the month (1 indexed)
 * @param {number} year - the year
 * @returns {boolean} - true if the date is the same, false otherwise
 */
export const isDateStringSame = (date: string, day: number, month: number, year: number): boolean => {
    if (!isValidDateFormat(date)) return false;
    return dayjs(date).isSame(dayjs(`${year}-${month}-${day}`))
}

/**
 * returns an object containing the date, month, year
 * @param date - the date from which year, month and day has to be extracted
 * @returns object containing the date, month and year
 */
export const getDayMonthYearFromString = (date: string): { year: number, month: number, day: number } => {
    if (!isValidDateFormat(date)) return null;
    const dayJsDate = dayjs(date);
    return {
        year: dayJsDate.year(),
        month: dayJsDate.month() + 1,
        day: dayJsDate.date(),
    }
}

