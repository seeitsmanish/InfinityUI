import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'i-calendar-header',
    styleUrl: 'i-calendar-header.scss',
    shadow: false,
})

export class ICalendarHeader {

    @Prop() calendarHeading?: JSX.Element | HTMLElement | string;
    @Prop() handlePrev?: () => void;
    @Prop() handleNext?: () => void;

    render() {
        return (
            <div class='calendar-header'>
                <i-button classes='calendar-header-nav-button' onClick={() => {
                    this.handlePrev?.();
                }}>
                    <i-chevron direction="left"></i-chevron>
                </i-button>
                <span class='calendar-header-info'>
                    {this.calendarHeading}
                </span>
                <i-button classes='calendar-header-nav-button' onClick={() => {
                    this.handleNext?.();
                }}>
                    <i-chevron direction="right"></i-chevron>
                </i-button>
            </div>
        )
    }
}