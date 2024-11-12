import { Component, Event, EventEmitter, h, Host, Prop, State, Watch } from "@stencil/core";
import { getDayMonthYearFromString, getMonthNavigationHeader } from "./utils";
import dayjs from "dayjs";

@Component({
    tag: 'i-calendar',
    styleUrl: 'i-calendar.scss',
    shadow: false,
})
export class ICalendar {

    @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
    @Prop() selected?: string;
    @Prop() minDate?: string;
    @Prop() maxDate?: string;
    @Prop() readOnly: boolean = false;

    selectedDateComponents = getDayMonthYearFromString(this.selected);

    @State() monthInView = this.selected ? this.selectedDateComponents.month : dayjs().month() + 1; //  month is 1 based
    @State() yearInView = this.selected ? this.selectedDateComponents.year : dayjs().year();


    @Event() select: EventEmitter<string>;
    handleDateSelection = (date: string) => {
        this.select.emit(date);
    }

    // For Month Navigations
    handlePreviousMonth = () => {
        /** Caution: Order of Update matters */
        this.yearInView = this.monthInView === 1 ? this.yearInView - 1 : this.yearInView;
        this.monthInView = this.monthInView === 1 ? 12 : this.monthInView - 1;
    }
    handleNextMonth = () => {
        /** Caution: Order of Update matters */
        this.yearInView = this.monthInView === 12 ? this.yearInView + 1 : this.yearInView;
        this.monthInView = this.monthInView === 12 ? 1 : this.monthInView + 1;
    }

    render() {
        const monthNavigationHeading = getMonthNavigationHeader(this.monthInView - 1, this.yearInView);
        return (
            <Host class='calendar-root'>
                {/* Calendar Header  */}
                <i-calendar-header
                    calendarHeading={monthNavigationHeading}
                    handlePrev={this.handlePreviousMonth}
                    handleNext={this.handleNextMonth}
                    readOnly={this.readOnly}
                />

                {/* Calendar Body */}
                <div class='calendar-body'>
                    <i-calendar-month-view
                        monthInView={this.monthInView}
                        yearInView={this.yearInView}
                        selected={this.selected}
                        handleDateSelection={this.handleDateSelection}
                        color={this.color}
                        minDate={this.minDate}
                        maxDate={this.maxDate}
                        readOnly={this.readOnly}
                    />
                </div>

            </Host>
        )
    }
}