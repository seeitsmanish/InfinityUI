import { Component, h, Host, Prop, State } from "@stencil/core";
import { getDaysArrayInMonth, getMonthNavigationHeader, getWeekNames, isToday } from "./utils";
import dayjs from "dayjs";

@Component({
    tag: 'i-calendar',
    styleUrl: 'i-calendar.scss',
    shadow: false,
})
export class ICalendar {

    @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';

    @State() monthInView = dayjs().month();
    @State() yearInView = dayjs().year();

    handlePreviousMonth = () => {
        /** Caution: Order of Update matters */
        this.yearInView = this.monthInView === 0 ? this.yearInView - 1 : this.yearInView;
        this.monthInView = this.monthInView === 0 ? 11 : this.monthInView - 1;
    }

    handleNextMonth = () => {
        /** Caution: Order of Update matters */
        this.yearInView = this.monthInView === 11 ? this.yearInView + 1 : this.yearInView;
        this.monthInView = this.monthInView === 11 ? 0 : this.monthInView + 1;
    }


    render() {
        const weekNames = getWeekNames();
        const days = getDaysArrayInMonth(this.monthInView, this.yearInView)
        const monthNavigationHeading = getMonthNavigationHeader(this.monthInView, this.yearInView);
        return (
            <Host class='calendar-root'>
                {/* Calendar Header  */}
                <div class='calendar-header'>
                    <i-button classes='calendar-header-nav-button' onClick={this.handlePreviousMonth}>
                        <i-chevron direction="left"></i-chevron>
                    </i-button>
                    <span class='calendar-header-info'>
                        {monthNavigationHeading}
                    </span>
                    <i-button classes='calendar-header-nav-button' onClick={this.handleNextMonth}>
                        <i-chevron direction="right"></i-chevron>
                    </i-button>
                </div>

                {/* Calendar Body */}
                <div class='calendar-body'>

                    {/* Week Names */}
                    <div class='calendar-body-week-days'>
                        {weekNames.map((weekName) => (
                            <div class='week-day-name'>{weekName}</div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div class='calendar-body-days'>
                        {/* TODO: Implement logic to render calendar days */}
                        {days.map((day) => {
                            const dayClasses = [`day-button ${this.color}`];
                            if (!day) dayClasses.push('empty-day-button');
                            if (isToday(day, this.monthInView, this.yearInView)) dayClasses.push('today-button');
                            const buttonClassName = dayClasses.join(' ');
                            return (
                                <i-button
                                    color={this.color}
                                    variant="light"
                                    classes={buttonClassName}
                                    // disableRipple
                                    disabled={!day}
                                >
                                    {day}
                                </i-button>
                            )
                        }
                        )}
                    </div>
                </div>

            </Host>
        )
    }
}