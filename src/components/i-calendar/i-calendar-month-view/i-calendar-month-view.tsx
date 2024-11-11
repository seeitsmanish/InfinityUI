import { Component, Fragment, h, Prop } from '@stencil/core';
import { getDaysArrayInMonth, getFormattedDate, getWeekNames, isDateStringSame, isToday } from '../utils';
import dayjs from 'dayjs';

@Component({
    tag: 'i-calendar-month-view',
    styleUrl: 'i-calendar-month-view.scss',
    shadow: false,
})

export class ICalendarMonthView {

    @Prop() monthInView: number;
    @Prop() yearInView: number;
    @Prop() selected?: string;
    @Prop() handleDateSelection?: (date: string) => void;
    @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
    @Prop() minDate?: string;
    @Prop() maxDate?: string;

    getButtonClassNames(day: number | null): string {
        // common class for all buttons
        const dayClasses = [`day-button`];

        // checking if it is an empty button / not to show button
        if (!day) dayClasses.push('empty-day-button');

        const dayjsDate = dayjs(`${this.yearInView}-${this.monthInView - 1}-${day}`)
        if (isToday(day, this.monthInView - 1, this.yearInView)) dayClasses.push('today-button');
        if (isDateStringSame(this.selected, day, this.monthInView, this.yearInView)) dayClasses.push('selected-button')

        // disabling buttons based on min and max dates
        if (this.minDate && dayjsDate.isBefore(this.minDate)) dayClasses.push('disabled-button')
        if (this.maxDate && dayjsDate.isAfter(this.maxDate)) dayClasses.push('disabled-button')
        const buttonClassName = dayClasses.join(' ');
        return buttonClassName;
    }
    render() {
        const weekNames = getWeekNames();
        const days = getDaysArrayInMonth(this.monthInView - 1, this.yearInView)

        console.log(this.minDate, this.maxDate);

        return (

            <Fragment>
                {/* Week Names */}
                <div class='calendar-body-week-days'>
                    {weekNames.map((weekName) => (
                        <div class='week-day-name'>{weekName}</div>
                    ))}
                </div>

                {/* Calendar Days */}
                <div class='calendar-body-days'>
                    {days.map((day) => {
                        const buttonClassNames = this.getButtonClassNames(day);
                        return (
                            <i-button
                                color={this.color}
                                variant="light"
                                classes={buttonClassNames}
                                disabled={!day}
                                onClick={() => {
                                    if (!day) return;
                                    this.handleDateSelection(getFormattedDate(day, this.monthInView, this.yearInView));
                                }}
                            >
                                {day}
                            </i-button>
                        )
                    }
                    )}
                </div>
            </Fragment>
        )
    }

}