import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core";
import { getDayMonthYearFromString, getMonthNavigationHeader, getYearNavigationHeader } from "./utils";
import { DateTypeComponents } from "./models";

@Component({
    tag: 'i-calendar',
    styleUrl: 'i-calendar.scss',
    shadow: false,
})
export class ICalendar {

    constructor() {
        // Bind the methods in constructor
        this.toggleCurrentView = this.toggleCurrentView.bind(this);
        this.handleDateSelection = this.handleDateSelection.bind(this);
        this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.handleYearSelection = this.handleYearSelection.bind(this);
    }

    @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
    @Prop() selected?: string;
    @Prop() minDate?: string;
    @Prop() maxDate?: string;
    @Prop() readOnly: boolean = false;
    selectedDateComponents: DateTypeComponents = getDayMonthYearFromString(this.selected);
    @State() currentView: 'month' | 'year' = 'month';

    /**
     * when user makes changes like navigates through month or year,
     * these states store those changes, and when user chooses any date, these states are synced
     * with selectedDate
     */
    @State() monthInView: number = this.selectedDateComponents?.month;
    @State() yearInView: number = this.selectedDateComponents?.year;

    /**
     * This state's soley purpose is to provide stable year navigation
     */
    @State() yearNavigationRangeValue: number = this.yearInView;


    /**
     * handles the calendar date selection
     */
    @Event() dateSelect: EventEmitter<string>;
    handleDateSelection = (date: string) => {
        this.dateSelect.emit(date);
    }
    /**
     * toggle the current view i.e. 'month' view or 'year' view
     */
    toggleCurrentView() {
        this.currentView = this.currentView === 'month' ? 'year' : 'month';
    }
    /**
     * handles year navigation i.e. yearInView
     */
    handlePreviousMonth = () => {
        /** Caution: Order of Update matters */
        this.yearInView = this.monthInView === 1 ? this.yearInView - 1 : this.yearInView;
        this.monthInView = this.monthInView === 1 ? 12 : this.monthInView - 1;
    }
    /**
     * handles month navigation i.e. monthInView
     */
    handleNextMonth = () => {
        /** Caution: Order of Update matters */
        this.yearInView = this.monthInView === 12 ? this.yearInView + 1 : this.yearInView;
        this.monthInView = this.monthInView === 12 ? 1 : this.monthInView + 1;
    }
    /**
     * handles the year selection
     */
    handleYearSelection(year: number) {
        this.yearInView = year;
        this.currentView = 'month';
    }
    handlePrevYearNavigation = () => {
        this.yearNavigationRangeValue = this.yearNavigationRangeValue - 15;
    }
    handleNextYearNavigation = () => {
        this.yearNavigationRangeValue = this.yearNavigationRangeValue + 15;
    }


    render() {
        const monthNavigationHeading = getMonthNavigationHeader(this.monthInView - 1, this.yearInView);
        const yearNavigationHeading = getYearNavigationHeader(this.yearNavigationRangeValue);
        return (
            <Host class='calendar-root'>
                {/* Calendar Header  */}
                <i-calendar-header
                    calendarHeading={this.currentView === 'month' ? monthNavigationHeading : yearNavigationHeading}
                    handlePrev={this.currentView === 'month' ? this.handlePreviousMonth : this.handlePrevYearNavigation}
                    handleNext={this.currentView === 'month' ? this.handleNextMonth : this.handleNextYearNavigation}
                    readOnly={this.readOnly}
                    toggleCurrentView={this.toggleCurrentView}
                    color={this.color}
                />
                {/* Calendar Body */}
                <div class='calendar-body'>
                    {this.currentView === 'month' ? (
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
                    ) : (
                        <i-calendar-year-view
                            yearInView={this.yearInView}
                            readOnly={this.readOnly}
                            color={this.color}
                            handleYearSelection={this.handleYearSelection}
                            selectedDateComponents={this.selectedDateComponents}
                            yearNavigationRangeValue={this.yearNavigationRangeValue}
                        />
                    )}
                </div>
            </Host>
        )
    }
}