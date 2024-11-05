import dayjs, { Dayjs } from "dayjs";
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