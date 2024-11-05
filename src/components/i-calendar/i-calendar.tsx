import { Component, h, Host, State } from "@stencil/core";
import { getDaysArrayInMonth, getWeekNames } from "./utils";
import dayjs from "dayjs";

@Component({
    tag: 'i-calendar',
    styleUrl: 'i-calendar.scss',
    shadow: false,
})
export class ICalendar {


    @State() monthInView = dayjs().month();
    @State() yearInView = dayjs().year();


    render() {
        const weekNames = getWeekNames();
        const days = getDaysArrayInMonth(this.monthInView, this.yearInView)
        console.log(days);
        return (
            <Host class='calendar-root'>
                {/* Calendar Header  */}
                <div class='calendar-header'>
                    <i-button classes='calendar-header-nav-button'>
                        <i-chevron direction="left"></i-chevron>
                    </i-button>
                    <span class='calendar-header-info'>
                        November
                    </span>
                    <i-button classes='calendar-header-nav-button'>
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
                            let buttonClassName = 'day-button';
                            if (!day) buttonClassName += ' empty-day-button'
                            return (
                                <button
                                    // variant="light"
                                    // color='primary'
                                    class={buttonClassName}
                                // disableRipple
                                >
                                    {day}
                                </button>
                            )
                        }
                        )}
                    </div>
                </div>

            </Host>
        )
    }
}