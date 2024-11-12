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
    @Prop() readOnly: boolean;

    getButtonClassNames(day: number | null): string {
        const dayjsDate = dayjs(`${this.yearInView}-${this.monthInView}-${day}`)
        // common class for all buttons
        const classes: string[] = ['day-button'];
        // checking if it is an empty button / not to show button
        if (!day) {
            classes.push('empty-day-button');
        }
        // checking if it is today's date
        if (isToday(day, this.monthInView - 1, this.yearInView)) {
            classes.push('today-button');
        }
        // checking if it is selected date
        if (isDateStringSame(this.selected, day, this.monthInView, this.yearInView)) {
            classes.push('selected-button');
        }
        // checking if it is disabled date not between min and max dates
        if ((this.minDate && dayjsDate.isBefore(this.minDate)) ||
            (this.maxDate && dayjsDate.isAfter(this.maxDate)) ||
            this.readOnly) {
            classes.push('disabled-button');
        }
        return classes.join(' ');
    }

    isDisabledDate(day: number): boolean {
        const dayjsDate = dayjs(`${this.yearInView}-${this.monthInView}-${day}`);
        return (this.minDate && dayjsDate.isBefore(this.minDate)) ||
            (this.maxDate && dayjsDate.isAfter(this.maxDate))
    }
    render() {
        const weekNames = getWeekNames();
        const days = getDaysArrayInMonth(this.monthInView - 1, this.yearInView)
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
                                disableRipple
                                disabled={!day}
                                onClick={() => {
                                    if (!day || this.isDisabledDate(day) || this.readOnly) return;
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